
import React from 'react';
import logo from './assert/music.png';
import Avatar from './assert/Avatar.png';
import { ReactDOM } from 'react-dom/client';
import './index.css'

const HeaderComponent = () =>{
    return (
        <div className="HeaderClass">
            <div className = "LogoClass">
                <img src = {logo} width={'50px'} height={'50px'} />
            </div>
            <div className='SearchBar'>
                <input type = "text" placeholder = "Search Your Items Here...." />

            </div>
            <div className = "LogoClass">
                <img src = {Avatar} width={'50px'} height={'50px'} />
            </div>
            

        </div>
    )
}


export default HeaderComponent;