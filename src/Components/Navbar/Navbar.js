import React from 'react'
import './navbar.scss'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlineSearch } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

export default function Navbar() {
    return (
        <nav className='nav-container'>

            <div className='logo-container'>
                <img className='logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="logo" />
            </div>

            <div className='search-container'>
                <div className='search'>
                    <input className='search-input' type="text" placeholder='search' />
                    <RxCross2 size="1.5rem" color='grey' />
                    <HiOutlineSearch size="1.5rem" color='grey' />
                </div>
            </div>

            <div className='profile-container'>
                < AiOutlineSetting size="1.6rem" color='#ffff' />
                <CgMenuGridO size="1.6rem" color='#ffff' />
                <img className='profile-pic' src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="pic" />
            </div>

        </nav>
    )
}
