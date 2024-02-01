import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import Profile from '../Pages/Profile'
import AppNotFound from '../Pages/AppNotFound'

export default function Router() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<AppNotFound />} />
                    <Route path='/' element={<SignUp />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>

            </BrowserRouter>
        </div>

    )
}
