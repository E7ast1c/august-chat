import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, InputGroup, InputGroupAddon,
    Input, Button
} from 'reactstrap';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ChannelSection = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [channels, setChannels] = useState([1, 2, 3, 4, 5])
    const [active, setActive] = useState(0)

    return (<Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">Channels</NavbarBrand>
        {collapsed ? <IoIosArrowUp size={"1.5em"} onClick={() => setCollapsed(!collapsed)} />
            : <IoIosArrowDown size={"1.5em"} onClick={() => setCollapsed(!collapsed)} />}
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className={"list-group"}>
                {channels.map((item, i) =>
                    <NavItem>
                        <NavLink className={`${i == active ? "active" : "inactive"}`}
                            onClick={() => setActive(i)} key={i} href="#"> - Channel {item}
                        </NavLink>
                    </NavItem>)}
            </Nav>
            <InputGroup>
            <Input />
                <InputGroupAddon addonType="append">
                    <Button color={"primary"} size="sm">Add</Button>
                </InputGroupAddon>
            </InputGroup>
        </Collapse>
    </Navbar>
    );
}

export default ChannelSection;