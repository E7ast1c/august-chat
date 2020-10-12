import React, { Component, } from 'react'
// import '../../App.css';
import ChannelSection from '../ChannelSection/index'
import UsersSection from '../UsersSection/index'
import s from './AsideSection.module.css'

export default function AsideSection() {
    let test = [1,2,3,4,5];
    

    return (
        <div className={s.asside}>
            <ChannelSection />
            <UsersSection usersList={test} />
            {/* <ChannelSection /> */}
        </div>
    )
}