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


document.title="BlogX"

function App() {
  return (    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>  
    
  );
}

export default App;
