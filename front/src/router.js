import { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Authentication from './components/Authentication'
import RoomList from './components/Rooms'
import Token from './context'
import Chat from './components/Chat'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Chat />} /> 
            <Route path='/auth' element={<Authentication />}/>
            <Route path='/rooms' element={
                <RequiredAuth>
                    <RoomList />
                </RequiredAuth>
            }>

            </Route>
        </Routes>
    )
}


function RequiredAuth({children}){
    const {token} = useContext(Token)
    if(!token){
        return <Navigate to='/auth' />
    }

    return children
}