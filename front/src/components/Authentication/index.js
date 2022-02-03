import React, { useRef, useState, useContext } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe, LinkedText } from './styled.js'
import { useFetch } from '../../hooks/useFetch'
import Token from '../../context.js';


export default function Authentication() {
    ///////////////////////////////////////////////
    const [isRegistration, setAction] = useState(false)
    const [hasError, setError] = useState(false)
    const  userName = useRef()
    const password= useRef()
    const {setToken} = useContext(Token)
    const { loading, request } = useFetch()
    

    const handleLogin = async (data, password) => {

        const URL = `http://localhost:13943/${isRegistration ? 'register' : 'auth'}`
        const METHOD = 'POST'
        const BODY = JSON.stringify({
            'username': data,
            'password': password
        })

        await request(URL, METHOD, BODY)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res.JWT)
                setToken(res.JWT)
                localStorage.setItem('token', res.JWT)
        })

    }

    ///////////////////////////////////////////////

    return(
            <Background>
                <LoginWindow>
                    <Text textSize={{min: '18', max: '26'}}>{isRegistration ? 'Регистрация' : 'Авторизация'}</Text>

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
                        
                        if(userName.current.value){
                            handleLogin(userName.current.value, password.current.value)
                        } else{
                            setError(true)
                        }
                    }}> {isRegistration ? 'Зарегистрироваться' : 'Войти'} </LoginButton>
                    <Text textSize={{min: '12', max: '16'}}>{isRegistration ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'} <LinkedText onClick={()=>{setAction(prev => {return !prev})}}>{isRegistration ? 'Войти' : 'Зарегистрироваться'}</LinkedText></Text>

                </LoginWindow>
            </Background>
        )
}
