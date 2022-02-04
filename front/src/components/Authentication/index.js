import React, { useContext } from 'react';
import { Background, LoginWindow, UsernameArea, LoginButton, Text, LinkedText, AuthForm } from './styled.js'
import { useFetch } from '../../hooks/useFetch'
import Token from '../../context.js';
import { useFormik } from 'formik'


export default function Authentication() {
    const {setToken} = useContext(Token)
    const { loading, request } = useFetch()

    const requestAuth = ({...values}) => {
        request('auth', 'POST', JSON.stringify({
            username: values.username,
            password: values.password
        }))
        .then(response => {
            if(response.status === 200){
                return response.json()
            } else{
                return 0
            }
        })
        .then(response => {
            if(response){
             setToken(response.JWT)
             localStorage.setItem('token', response.JWT)
            }
        })
    }


    const authForm = useFormik({
        initialValues:{
            username: '',
            password: ''
        },
        onSubmit: values => {
            requestAuth(values)
        }
    })
    
    return(
            <Background>
                <LoginWindow>
                    <Text textSize={{min: '18', max: '26'}}>Авторизация</Text>
                        <AuthForm onSubmit={authForm.handleSubmit} >
                        <UsernameArea 
                            type='textarea'
                            autoComplete='off' 
                            placeholder='username' 
                            autoFocus
                            value={authForm.values.username}
                            onChange={authForm.handleChange}
                            name='username' 
                            />
                        <UsernameArea
                        name='password'
                            type='password'
                        autoComplete='off'
                        placeholder='password'
                        value={authForm.values.password}
                        onChange={authForm.handleChange}
                        />

                        <LoginButton disabled={loading} type='submit'> Войти </LoginButton>
                        <Text textSize={{min: '12', max: '16'}}>Ещё не зарегистрированы? <LinkedText> зарегистрироваться</LinkedText></Text>
                        </AuthForm>
                </LoginWindow>
            </Background>
        )
}
