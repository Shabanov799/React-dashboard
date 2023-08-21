import React from 'react'
import logo from '../../assets/images/logo.png'

import dashboardIcon from '../../assets/icons/dashboard-icon.png'
import leaderboardIcon from '../../assets/icons/leaderboard-icon.png'
import orderIcon from '../../assets/icons/order-icon.png'
import productsIcon from '../../assets/icons/products-icon.png'
import salesreportIcon from '../../assets/icons/salesreport-icon.png'
import messagesIcon from '../../assets/icons/messages-icon.png'
import settingsIcon from '../../assets/icons/settings-icon.png'
import signoutIcon from '../../assets/icons/signout-icon.png'

import advertisingLogo from '../../assets/images/advertising-logo.png'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Nagivation = () => {
    return (
        <ul>
            <li id='linkOne'>
                <Link to="/"><img src={dashboardIcon} alt="icon" /> Dashboard</Link>
            </li>
            <li>
                <Link to="/leaderboard"><img src={leaderboardIcon} alt="icon" /> Leaderboard</Link>
            </li>
            <li>
                <Link to="/order"><img src={orderIcon} alt="icon" /> order</Link>
            </li>
            <li>
                <Link to="/products"><img src={productsIcon} alt="icon" /> Products</Link>
            </li>
            <li>
                <Link to="/salesreport"><img src={salesreportIcon} alt="icon" /> Sales Report</Link>
            </li>
            <li>
                <Link to="/messages"><img src={messagesIcon} alt="icon" /> Messages</Link>
            </li>
            <li>
                <Link to="/settings"><img src={settingsIcon} alt="icon" /> Settings</Link>
            </li>
            <li>
                <Link to="/signout"><img src={signoutIcon} alt="icon" /> Sign Out</Link>
            </li>
        </ul>
    )
}

function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='logo-img' src={logo} alt='logo' />
            <Nagivation />
            <div className='sidebarAdvertising'>
                <div className="innerAdvertising">
                    <img src={advertisingLogo} alt='logo' />
                    <h2>Dabang Pro</h2>
                    <p>Get access to all features on tetumbas</p>
                    <Button
                        className='advertisingBtn'
                    >
                        Get Pro
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar