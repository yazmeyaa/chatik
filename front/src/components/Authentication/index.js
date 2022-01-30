import React, { useRef, useState } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe } from './styled.js'

export default function Authentication() {
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    const userName = useRef()
    const rememberMe = useRef()
    
    const handleLogin = async (data, remember) => {
        setLoading(true)

        const token = await fetch('http://127.0.0.1:13943/auth', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': data,
                'rememberMe': remember
            })
        })
        .then((res)=>{
            return res.json()
        })
        setLoading(false)
        console.log(token.JWT)
        
    }

    return(
            <Background>
                <LoginWindow>


                    <Text>who are you?</Text>
                    <UsernameArea type='textarea'
                    autoComplete='off' 
                    placeholder='username' 
                    autoFocus
                    name='username' 
                    ref={userName}
                    error={hasError}
                    onFocus={()=>{
                        if(hasError){
                            setError(false)
                        }
                    }} />
                    <RememberMe>
                        <input type='checkbox' ref={rememberMe}/>
                        <span>remember me</span>
                    </RememberMe>
                    <LoginButton disabled={isLoading} type='submit' onClick={()=>{
                        
                        if(userName.current.value){
                            handleLogin(userName.current.value, rememberMe.current.checked)
                        } else{
                            setError(true)
                        }
                    }}> login </LoginButton>


                </LoginWindow>
            </Background>
        )
}
