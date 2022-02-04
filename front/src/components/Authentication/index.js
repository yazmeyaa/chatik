import React, { useRef, useState, useContext } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, LinkedText } from './styled.js'
import { useFetch } from '../../hooks/useFetch'
import Token from '../../context.js';


export default function Authentication() {
    const [hasError, setError] = useState(false)
    const userName = useRef()
    const password= useRef()
    const {setToken} = useContext(Token)
    const { loading, request } = useFetch()
    

    async function handleSubmit(login, password){
        request('auth', 'POST', JSON.stringify({
            username: login.current.value,
            password: password.current.value
        }))
        .then(async (response)=>{
            if(response.status === 200){
                return response.json()
            }
        })
        .then(response => {
            console.log(response.JWT)
            setToken(response.JWT)
            localStorage.setItem('token', response.JWT)
        })
    }

    return(
            <Background>
                <LoginWindow>
                    <Text textSize={{min: '18', max: '26'}}>Авторизация</Text>

                    <UsernameArea 
                        type='textarea'
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
                    <UsernameArea
                        type='password'
                    error={hasError}
                    autoComplete='off'
                    placeholder='password'
                    ref={password}
                    onFocus={()=>{
                        if(hasError){
                            setError(false)
                        }
                    }}
                    />

                    <LoginButton disabled={loading} type='submit' onClick={()=>{
                        handleSubmit(userName, password)
                        }}> Войти </LoginButton>
                    <Text textSize={{min: '12', max: '16'}}>Ещё не зарегистрированы? <LinkedText> зарегистрироваться</LinkedText></Text>

                </LoginWindow>
            </Background>
        )
}
