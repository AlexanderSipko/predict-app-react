
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

function Manage() {
  return (
    <BrowserRouter basename="/predict-app-react">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/contact" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Manage;
