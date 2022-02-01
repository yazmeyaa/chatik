import React, { useRef, useState, useContext } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, RememberMe, LinkedText } from './styled.js'
import Token from '../../context.js';

export default function Authentication() {
    const [isRegistration, setAction] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    const userName = useRef()
    const rememberMe = useRef()
    const password = useRef()
    const {setToken} = useContext(Token)
    
    const handleLogin = async (data, password, remember) => {
        setLoading(true)

        const fetchedToken = await fetch(`http://127.0.0.1:13943/${ isRegistration ? 'register' : 'auth' }`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': data,
                'password': password,
                'rememberMe': remember
            })
        })
        .then((res)=>{
            return res.json()
        })
        setLoading(false)
        setToken(fetchedToken.JWT)
        localStorage.setItem('token', fetchedToken.JWT)
    }

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
                    type='textarea'
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

                    <RememberMe>
                        <input type='checkbox' ref={rememberMe}/>
                        <span>remember me</span>
                    </RememberMe>

                    <LoginButton disabled={isLoading} type='submit' onClick={()=>{
                        
                        if(userName.current.value){
                            handleLogin(userName.current.value, password.current.value,  rememberMe.current.checked)
                        } else{
                            setError(true)
                        }
                    }}> {isRegistration ? 'Зарегистрироваться' : 'Войти'} </LoginButton>
                    <Text textSize={{min: '12', max: '16'}}>{isRegistration ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'} <LinkedText onClick={()=>{setAction(prev => {return !prev})}}>{isRegistration ? 'Войти' : 'Зарегистрироваться'}</LinkedText></Text>

                </LoginWindow>
            </Background>
        )
}
