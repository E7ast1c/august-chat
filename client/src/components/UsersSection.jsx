import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, InputGroup, InputGroupAddon,
    Input, Button
} from 'reactstrap';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const UsersSection = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [channels, setChannels] = useState(props.usersList);
    const [active, setActive] = useState(0);
    const [addUser, setUser] = useState('');
    const [, forceUpdate] = useReducer(x => x + 1 , 0)
   
    const addUserInList = (addUser, ) => {
        let tempUserList = channels;
        tempUserList.push(addUser.toString());
        setChannels(() => tempUserList )
        forceUpdate()
        setUser("")
    }

    return (<Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">Users</NavbarBrand>
        {collapsed ? <IoIosArrowUp size={"1.5em"} onClick={() => setCollapsed(!collapsed)} />
            : <IoIosArrowDown size={"1.5em"} onClick={() => setCollapsed(!collapsed)} />}
        <Collapse isOpen={!collapsed} navbar>
            {channels.length && <Nav navbar className={"list-group"}>
                {channels.map((item, indx) =>
                    <NavItem>
                        <NavLink className={`${indx == active ? "active" : "inactive"}`}
                            onClick={() => setActive(indx)} key={indx} href="#"> · User {item}
                        </NavLink>
                    </NavItem>)}
            </Nav>}
            <InputGroup>
            <Input value={addUser} onChange={event => setUser(event.target.value)}/>
                <InputGroupAddon addonType="append">
                    <Button onClick={() => addUserInList(addUser)} color={"primary"} size="sm">Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </Collapse>
    </Navbar>
    );
}


export default UsersSection;