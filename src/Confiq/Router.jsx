import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { auth, onAuthStateChanged } from './Confiq'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import Profile from '../Pages/Profile'
import AppNotFound from '../Pages/AppNotFound'

export default function Router() {

    const [UserLog, setUserLog] = useState(false)

    useEffect(function () {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setUserLog(true)
            } else {
                console.log("user not logIn");
                setUserLog(false)
            }
        });
    }, [])


    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='*' element={UserLog ? <Navigate to={'/profile'} /> : <AppNotFound />} />
                    <Route path='/' element={UserLog ? <Navigate to={'/profile'} /> : <SignUp />} />
                    <Route path='/login' element={UserLog ? <Navigate to={'/profile'} /> : <LogIn />} />
                    <Route path='/profile' element={UserLog ? <Profile /> : <Navigate to={'/login'} />} />
                </Routes>

            </BrowserRouter>
        </div>

    )
}
