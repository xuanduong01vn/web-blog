import './App.css';
import Header from'./components/Header/Header.js';
import Footer from'./components/Footer/Footer.js';
import HomeLayout from './components/HomeLayout/HomeLayout.js';


document.title="BlogX"

function App() {
  return (      
    <div className="App">
      <Header/>
      <HomeLayout/>
      <Footer/>
    </div>
  );
}

export default App;
