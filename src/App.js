import './App.css';
import Home from './pages/home/home';
import Service from './pages/services/service'
import InteriorDesign from './pages/InteriorDesign/interiorDesign';
import Material from './pages/material/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/material' element={<Material/>}></Route>
          <Route path='/interior' element={<InteriorDesign />}></Route>
          <Route path='/construction' element={<Service />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
