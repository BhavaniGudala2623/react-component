
import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

//import LoginComponent from './Login.component'
import HomePage  from './pages/homepage/homepage.component.js';
import HeaderPage from './components/headers/header.component.js';
import Login from "./pages/login/login";
function App() {
  return (
    <div className="App">
      
      <HeaderPage />
  
      <Routes>
      <Route exact path="/" element={<HomePage/>} ></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
 
  );
}

export default App;
