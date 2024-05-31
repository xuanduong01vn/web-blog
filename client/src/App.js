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
import ReadPost from './pages/ReadPost/ReadPost.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Profile from './pages/Account/Profile.js';
import Password from './pages/Account/Password.js';
import User from './pages/User/User.js';


function App() {
  return (    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/post' element={<ReadPost/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/account/profile' element={<Profile/>}/>
          <Route exact path='/account/password' element={<Password/>}/>
          <Route exact path='/user' element={<User/>}/>
        </Routes>
      </div>
    </Router>  
    
  );
}

export default App;
