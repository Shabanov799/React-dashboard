import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Leaderboard from '../pages/Leaderboard/Leaderboard'
import Order from '../pages/Order/Order'
import Products from '../pages/Products/Products'
import SalesReport from '../pages/SalesReport/SalesReport'
import Messages from '../pages/Messages/Messages'
import Settings from '../pages/Settings/Settings'
import SignOut from '../pages/SignOut/SignOut'

function Content() {
    return (
        <div className='content'>
            <Header />
            <div className="content-inner">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/salesreport' element={<SalesReport />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/signout' element={<SignOut />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content