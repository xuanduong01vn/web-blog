import './App.css';
import Header from'./components/Header/Header.js';
import Footer from'./components/Footer/Footer.js';
import HomeLayout from './components/HomeLayout/HomeLayout.js';
import React from 'react';
import { BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import ReadBlog from './pages/ReadBlog/ReadBlog.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';


function App() {
  return (    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/blog' element={<ReadBlog/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>  
    
  );
}

export default App;