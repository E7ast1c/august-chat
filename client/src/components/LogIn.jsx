import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, InputGroup, Input } from 'reactstrap'
import { useStore } from 'react-redux'
import { createLoginUser } from '../actions/users'

const LogIn = (props) => {
  const {
    className
  } = props;
  const [addPassword, setPassword] = useState('')
  const [addEmail, setEmail] = useState('')
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const store = useStore()

  useEffect(() => {
  
  }, []);

  function addUser() {
    // console.log(store.getState())
    const test = {
      addEmail, addPassword
    }
    console.log(store)
    store.dispatch(createLoginUser(test));
  }

  return (
    <div>
      <Button className="mt-1 mr-1" color="primary" onClick={toggle}>Log In</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In</ModalHeader>
        <ModalBody>
          <InputGroup style={{ display: 'grid' }}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="Email" placeholder="Email"
                value={addEmail} onChange={event => setEmail(event.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="Password" placeholder="Password"
                value={addPassword} onChange={event => setPassword(event.target.value)} />
            </FormGroup>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => addUser()} >Let's Go!</Button>
          <Button color="secondary" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default LogIn;