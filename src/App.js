import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './componet/loging/index.jsx';
import Register  from './componet/Register/index.jsx';
import Forget from './componet/Forget/index.jsx';
import Home from './componet/Home/index.jsx';
import Reset from './componet/Forget/reset.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route  exact path="/register" element={<Register />} />
          <Route exact path="/forget" element={<Forget />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reset-password/:token" element={<Reset />} />
        </Routes>
        
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
