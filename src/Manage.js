
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

function Manage() {
  return (
      <Routes>
        <Route exact path='/a' element={<Home />} />
        <Route path="/t" element={<Header />} />
      </Routes>
  );
}

export default Manage;
