
import { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Authentication from './components/Authentication'
import RoomList from './components/Rooms'
import Token from './context'
import Chat from './components/Chat'
import MainPage from './components/MainPage'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={
                <OnlyWithoutToken>
                    <Authentication/>
                </OnlyWithoutToken>
            } />
            <Route path='/chat' element={
            <RequiredAuth>
                <Chat />
            </RequiredAuth>
        }/> 
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

function OnlyWithoutToken({children}){
    const {token} = useContext(Token)
    if(token){
        return <Navigate to='/rooms' />
    }

    return children
}