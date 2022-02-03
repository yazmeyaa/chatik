import React, {useState, useEffect} from "react";
import Token from "./context";
import {Router} from './router'
import { useFetch } from "./hooks/useFetch";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const {loading, request} = useFetch()

  const trustToken = (JWT) => {
      request('http://localhost:13943/verify', 'POST', JSON.stringify({'token': JWT}))
      .then((response)=>{
        if(response.status === 400){
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
    <Token.Provider value={{token, setToken}}>
      <Router />
    </Token.Provider>
  );
}

export default App;
