import React, { useRef } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe } from './styled.js'

export default function Authentication() {
    const userName = useRef()
    
    const handleLogin = (data) => {
        fetch()
    }

    return(
            <Background>
                <LoginWindow>
                    <Text>username</Text>
                    <UsernameArea type='textarea' placeholder='username' name='username' ref={userName}/>
                    <RememberMe>
                        <input type='checkbox' name='rememberMe'/>
                        <span>remember me</span>
                    </RememberMe>
                    <LoginButton type='submit' onClick={()=>{
                        




                    }}> login </LoginButton>
                </LoginWindow>
            </Background>
        )
}
