// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Navbar from './Pages/Navbar';
import Personal from './Pages/Personal';
import PageNoFound from './Pages/PageNoFound';


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/Login" element={<Login />} />

          <Route path="*" element={<PageNoFound />} />
       </Routes>

    </>
  );
}

export default App;
