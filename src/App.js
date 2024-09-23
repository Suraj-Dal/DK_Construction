import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
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
        <Route path='/' element={<Material/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
