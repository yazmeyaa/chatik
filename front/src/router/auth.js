import {Routes, Route, Switch } from 'react-router-dom'
import Authentication from '../components/Authentication/index'
import Chat from '../components/Chat/index'
import React, {useState, useEffect} from 'react'
import {proveToken} from '../../middleware/auth/functions'


export function AuthRouter(userToken) {
const [isUserAuth, setUserAuth] = useState(false)

useEffect(()=>{
    
}, [])

    return(
        <Routes>
            <Route path='/' element={isUserAuth ? <Chat /> : <Authentication />} />
        </Routes>
    )
}