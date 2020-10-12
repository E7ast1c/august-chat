import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, FormGroup, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import s from './MainSection.module.css'
import "../../App.css";


const MainSection = (props) => {
  const dummy = {
    userId: 2,
    nickname: "Alex",
    timestamp: 12,
    text: "Hi"
  }

  const [messagesList, setMessagesList] = useState([{ ...dummy}]);

  const [message, setMessage] = useState('');

  const testCurrentUser = {
    userId: 2,
    nickname: "Alex",
    email: 'alex@mail.ru',
    timestamp: new Date()
  }


  const addMessage = (message) => {

    const test = {
      userId: 4,
      nickname: "Hohoho",
      text: message,
      timestamp: new Date()
    }

    console.log(messagesList)
    setMessagesList([...messagesList, test])
    setMessage('')
  }

  const currentId = 4;

  const onEnter = (event) => {
    if(event.key === 'Enter'){
      addMessage()
    }

  }

  return (
    <>
      <h2 className={s.title}>Chat</h2>
      <div className={s.main}>
      {messagesList.map((i) =>
        <div className={currentId === i.userId ? s.currentUserChat : s.chat}>
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
          onClick={() => addMessage(message)}
        >
          Send
        </Button>
      </FormGroup>

    </>


  )
}

export default MainSection;