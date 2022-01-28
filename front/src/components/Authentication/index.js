import React, { useRef, useState } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe } from './styled.js'
import Cookies from 'js-cookie'

export default function Authentication() {
    const userName = useRef()
    const [isLoading, setLoading] = useState(false)
    const rememberMe = useRef()
    const [hasError, setError] = useState(false)
    
    const handleLogin = async (data, remember) => {

        setLoading(true)

        const response = await fetch('http://localhost:13943/auth', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data,
                rememberMe: remember
            })
        })
        .then((res)=>{
            console.log(res.headers)
            Cookies.get("")
            return res.json()
        })
        .then((res)=>{
            console.log(res)
        })
        .catch(e => console.error(e))
        setLoading(false)


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
