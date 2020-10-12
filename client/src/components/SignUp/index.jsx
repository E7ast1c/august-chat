import React, {useState}  from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, InputGroup, Input } from 'reactstrap'



const SingUp = (props) => {
  const {
    className
  } = props;
  const [addUser, setUser] = useState('');
  const [addPassword, setPassword] = useState('')
  const [addEmail, setEmail] = useState('')
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  return (
    <div>
      <Button  className="mt-1 mr-1" color="secondary" onClick={toggle}>Sign Up</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <InputGroup style={{ display: 'grid' }}>
              <FormGroup>
                <Label for="Name">Nick Name</Label>
                <Input type="text" name="text" id="Name" placeholder="Nick Name"
                  value={addUser} onChange={event => setUser(event.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Email" 
                  value={addEmail} onChange={event => setEmail(event.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Label for="ePassword">Password</Label>
                <Input type="password" name="password" id="ePassword" placeholder="Password" 
                  value={addPassword} onChange={event => setPassword(event.target.value)}/>
              </FormGroup>
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Let's Go!</Button>
            <Button color="secondary" onClick={toggle}>No</Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}
export default SingUp;