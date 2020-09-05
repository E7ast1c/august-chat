import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

const HeaderSection = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
    <div className="text-right">
      <Button className="mr-1" color="primary"  id="ScheduleUpdateTooltip" onClick={toggle}>{buttonLabel}Log In</Button>
      <Button className="mr-1" color="primary" id="ScheduleUpdateTooltip">Sing In</Button>

      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
      <ModalBody>
      {/* <InputGroup>
        <Input value={addUser} onChange={event => setUser(event.target.value)}/>
            <InputGroupAddon addonType="append">
                <Button onClick={() => addUserInList(addUser)} color={"primary"} size="sm">Add</Button>
            </InputGroupAddon>
        </InputGroup> */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
      </Modal>
    </div>

  );
}
export default HeaderSection;