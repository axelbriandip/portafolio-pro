import './css/main.css';

// import components
import './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Abilities from './components/Abilities';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <SobreMi/>
      <Abilities/>
      <Projects/>
    </div>
  )
}

export default App;