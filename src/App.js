import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import RepairShop from './Pages/repairShop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/repairShop' element={<RepairShop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
