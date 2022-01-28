import React, { useState } from "react";
import Authentication from './components/Authentication/index'

function App() {
  const [token, setToken] = useState(document.cookie.split('=')[1])
  console.log(token)
  return (
    <Authentication />
  );
}

export default App;
