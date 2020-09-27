import React, { useState } from 'react'
import { ListGroup, ListGroupItem, FormGroup, Input, Button } from 'reactstrap';

const MainSection = (props) => {
   
  const [user, setUser] = useState([
    {
      userId: 1,
      nickname: "Anna",
      timestamp: 11,
      text: "Hello Chat"
    },
    {
      userId: 2,
      nickname: "Alex",
      timestamp: 12,
      text: "Hi"
    }
  ]);
  
  
  const [addMessage, setMessage] = useState({
    text: ''
  });


  const styleTextarea = {
    resize: 'none',
    width: '50%',
    height: 'content'
  }


  return (
    <div>
      <h2 className="mb-5">Chat</h2>
      <ListGroup>
        <h4 className="mb-0">{user[0].nickname}</h4>
        <p>{user.[0].text}</p>
        <ListGroupItem className="w-50 border-0" ></ListGroupItem>
      </ListGroup>
      <FormGroup >
        <Input type="textarea" name="text" id="Message" 
        placeholder="Message..." 
        style={styleTextarea} 
        value={addMessage.text}
        onChange={event => setMessage(event.target.value)}
        />
        {console.log(addMessage.text)}

        <Button color="primary" 
        >
        Send 
        </Button>
      </FormGroup>

    </div>


  )
}

export default MainSection;