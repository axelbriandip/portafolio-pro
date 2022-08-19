import './css/main.css';

// import components
import './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Abilities from './components/Abilities';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <SobreMi/>
      <Abilities/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;