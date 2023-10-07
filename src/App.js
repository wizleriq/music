import './App.css';
// import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faLessThan } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
// import Sidebar from './components/sidebar/Sidebar';



function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar/>
      <Home/>

      </div>
      <Footer />
    </div>
  );
}

export default App;
