import React from 'react'
import './feed.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiShoppingTag, CiMenuKebab } from 'react-icons/ci'
import { BiImages, BiNews } from 'react-icons/bi'
import { MdVideoSettings } from 'react-icons/md'

export default function Feed() {
    return (
        <div className='feed'>
            <div className='tabs-container'>
                <div className='tab'>
                    <AiOutlineSearch color=' #909199' />
                    <p className='tab-names'>All</p>
                </div>
                <div className='tab'>
                    <CiShoppingTag />
                    <p className='tab-names'>Shopping</p>
                </div>
                <div className='tab'>
                    <BiImages color=' #909199' />
                    <p className='tab-names'>Images</p>
                </div>
                <div className='tab'>
                    <BiNews color=' #909199' />
                    <p className='tab-names'>News</p>
                </div>
                <div className='tab'>
                    <MdVideoSettings color=' #909199' />
                    <p className='tab-names'>Videos</p>
                </div>
                <div className='tab'>
                    <CiMenuKebab color=' #909199' />
                    <p className='tab-names'>More</p>
                </div>
            </div>
            <div className='tabs-border'>

            </div>
        </div>
    )
}
