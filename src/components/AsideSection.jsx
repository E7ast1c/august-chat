import React, { Component, } from 'react'
import '../App.css';
import HeaderSection from './HeaderSection'
import ChannelSection from './ChannelSection'
import UsersSection from './UsersSection'

export default function AsideSection() {
    let test = [1,2,3,4,5];
    

    return (
        <div className={"AsideSection"}>
            <ChannelSection />
            <UsersSection usersList={test} />
            {/* <ChannelSection /> */}
        </div>
    )
}