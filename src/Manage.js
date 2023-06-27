
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import My404Component from './components/My404Component'

function App() {
  return (
      <Routes>
        <Route path='/a' element={<Home />} />
        <Route path="/t" element={<Header />} />
        <Route path="/*" element={<My404Component />} />
      </Routes>
  );
}

export default App;
