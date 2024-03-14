import React from 'react'
import Login from './login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App