import React, { Component } from 'react'
import '../App.css';
import ChannelSection from './ChannelSection'
import UsersSection from './UsersSection'

export default function AsideSection() {
    return (
        <div className={"AsideSection"}>
            <ChannelSection />
            <UsersSection />
            {/* <ChannelSection /> */}
        </div>
    )
}