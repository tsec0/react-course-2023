import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  )
}

export default App
