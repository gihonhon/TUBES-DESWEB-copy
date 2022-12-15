import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';

function HEADER() {

    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=''/>

                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text'/>
                </div>

            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='my network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='jobs'/>
                <HeaderOption Icon={ChatIcon} title='messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='notification'/>
                <HeaderOption Avatar={AccountCircleIcon} title='me'/>
            </div>
        </div>
    )
}

export default HEADER