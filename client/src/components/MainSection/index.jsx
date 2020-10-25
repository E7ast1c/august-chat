import React, { useState, useEffect, useRef} from 'react'
import { ListGroup, ListGroupItem, FormGroup, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import s from './MainSection.module.css'
import "../../App.css";
import moment from 'moment'
import { useReducer } from 'react';



const MainSection = (props) => {
  const dummy = {
    userId: 2,
    nickname: "Alex",
    timestamp: 12,
    text: "Hi"
  }

  const myRef = useRef(null);
  const scrollToRef = () => {
    console.log(myRef)
    myRef.current.scroll(0,0)
  }

  
  
  const [messagesList, setMessagesList] = useState([{ ...dummy }]);
  
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    
  //  myRef.current.scrollIntoView({ behavior: 'smooth' })
   myRef.current.scroll(0,myRef.current.scrollHeight)
   console.log(myRef)
  },[messagesList]);

  const testCurrentUser = {
    userId: 2,
    nickname: "Alex",
    email: 'alex@mail.ru',
    timestamp: moment().format('hh:mm DD.MM.YYYY'),
  }


  const addMessage = (message) => {

    const test = {
      userId: 4,
      nickname: "Hohoho",
      text: message,
      timestamp: moment().format('LT')
    }

    // console.log(messagesList)
    setMessagesList([...messagesList, test])
    setMessage('')
  }
  
  const currentId = 4;

  
  const onEnter = (event) => {
    if (event.key === 'Enter') {
      addMessage(message)
      setMessage('')
      // scrollToRef(myRef)
      // console.log(' scrollToRef(myRef): ',  scrollToRef(myRef));
      // console.log('ref');
    }
  }


  
  
  return (
    <div>
      <div className={s.main}>
        <h2 className={s.title}>Chat</h2>
        <div ref={myRef}  id={'myRef'}  className={s.bodyChat}>
          {messagesList.map((i, index) =>
            <div key={index} className={currentId === i.userId ? s.currentUserChat : s.chat}>
              <ListGroup className={currentId === i.userId ? s.currentUserchatMessage : s.chatMessage}>
                <div className={s.chatContent}>
                  <span className={s.name}>{i.nickname}</span>
                  <p className={s.text}>{i.text}</p>
                  <span className={s.text}>{i.timestamp.toString()}</span>
                </div>
              </ListGroup>
            </div>
          )}
        </div>
      </div>


      <FormGroup className={s.formGroup} >
        
        <Input type="textarea"
          placeholder="Message..."
          className={s.textarea}
          value={message}
          onChange={event => setMessage(event.target.value)}
          onKeyPress={event => onEnter(event)}
        />
        <Button
          color="primary"
          className={s.btn}
          onClick={() => { addMessage(message)
            scrollToRef(myRef)
          }}
        >
          Send
        </Button>
      </FormGroup>

    </div>


  )
}

export default MainSection;