import React, {useState, useEffect} from "react";
import Authentication from './components/Authentication/index'
import Token from "./context";
import { Router } from './router'
import {BrowserRouter} from 'react-router-dom'

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
    <Router>
      <Token.Provider value={{token, setToken}}>
        <Authentication />
      </Token.Provider>
    </Router>
  );
}

export default App;
