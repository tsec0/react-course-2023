// vendors
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// utils, context
import * as authService from './services/authServices';
import AuthContext from './context/authContext';
import Path from './paths';

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Details from './components/details/Details';

function App() {
  const navigate = useNavigate();

  // not plesent here
  const [auth, setAuth] = useState({});

  // accessToken
  // email
  // username
  // _id

  const loginSubmitHandler = async (values) => {
    // console.log(values); // email , password
    const result = await authService.login(values.email, values.password);
    
    // bezotgovorno (ama samo malko) zaradi server return-a
    setAuth(result);

    navigate(Path.Home);
  }

  const registerSubmitHandler = async (values) => {
    console.log(values);
  }

  const values = { 
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  };

  
  return (
    // through the context
    <AuthContext.Provider value={values}>
    <div id="box">
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog/:gameId" element={<Details />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  )
}

export default App
