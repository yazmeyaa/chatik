import React, {useState, useEffect} from "react";
import Token from "./context";
<<<<<<< HEAD
import {Router} from './router'
=======
import { Router } from './router'
import {BrowserRouter} from 'react-router-dom'
>>>>>>> a8309bc11ef67732024a5f145b75fb1fd9d228a7

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const trustToken = () => {
      fetch('http://127.0.0.1:13943/token_verify',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'token': token})
      })
      .then((res)=>{
        if(res.status === 400){
          setToken('')
          localStorage.removeItem('token')
        }
      })
  }

  useEffect(()=>{
    window.addEventListener('storage', trustToken, false)

    if(token){
      trustToken()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
<<<<<<< HEAD
    <Token.Provider value={{token, setToken}}>
      <Router />
    </Token.Provider>
=======
    <Router>
      <Token.Provider value={{token, setToken}}>
        <Authentication />
      </Token.Provider>
    </Router>
>>>>>>> a8309bc11ef67732024a5f145b75fb1fd9d228a7
  );
}

export default App;
