import React, { useRef, useState } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe } from './styled.js'

export default function Authentication() {
    const userName = useRef()
    const [isLoading, setLoading] = useState(false)
    const [rememberMe, setRemember] = useState(false)
    const [hasError, setError] = useState(false)
    
    const handleLogin = async (data) => {

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
                  username: data
              })
        })
        .then((res)=>{
            return res.json()
        })
        .catch(e => console.error(e))

        console.log(response)
        setLoading(false)


    }

    return(
            <Background>
                <LoginWindow>


                    <Text>who are you?</Text>
                    <UsernameArea type='textarea'
                     autoComplete='off' 
                     placeholder='username' 
                     name='username' 
                     ref={userName}
                     error={hasError}
                     onFocus={()=>{
                        if(hasError){
                            setError(false)
                        }
                     }} />
                    <RememberMe>
                        <input type='checkbox' name='rememberMe' checked={rememberMe} onChange={()=>{
                            setRemember( last => last = !last)
                            console.log(rememberMe)
                        }}/>
                        <span>remember me</span>
                    </RememberMe>
                    <LoginButton disabled={isLoading} type='submit' onClick={()=>{
                        
                        if(userName.current.value){
                            handleLogin(userName.current.value)
                        } else{
                            setError(true)
                        }
                    }}> login </LoginButton>


                </LoginWindow>
            </Background>
        )
}
