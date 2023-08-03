import React from "react";
import { Routes, Route } from "react-router-dom";
import Input from "./pages/input";
import Main from "./pages/main";
import Navbar from "./component/Navbar";




const App = () => {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/input' element={<Input/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </>
  )
}

export default App