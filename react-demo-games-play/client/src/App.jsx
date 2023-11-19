import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Details from './components/details/Details';

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog/:gameId" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
