import React from 'react';
import LogIn from './LogIn'
import SignUp from './SignUp';
import { useStore } from 'react-redux'

function HeaderSection() {
  const store = useStore()
  const user = store.getState()
  //   const [modal, setModal] = useState(false);
  //   const [channels, setChannels] = useState(props.usersList);
  //   const [addUser, setUser] = useState('');
  //   const [, forceUpdate] = useReducer(x => x + 1 , 0)

  //   const addUserInList = (addUser, ) => {
  //     let tempUserList = channels;
  //     tempUserList.push(addUser.toString());
  //     setChannels(() => tempUserList )
  //     forceUpdate()
  //     setUser("")
  // }

  //   const toggle = () => setModal(!modal);

  //   const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
    <div className="d-flex justify-content-end">
      <LogIn />
      <SignUp />
      {/* <Button className="mr-1" color="primary" id="ScheduleUpdateTooltip" onClick={toggle}>{buttonLabel}Log In</Button>
      <Button className="mr-1" color="primary" id="ScheduleUpdateTooltip">Sing In</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input value={addUser} onChange={event => setUser(event.target.value)} />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => addUserInList(addUser)} color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
    </div>

  );
};

export default HeaderSection;