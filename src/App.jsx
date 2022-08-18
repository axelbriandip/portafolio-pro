import './css/main.css';

// import components
import './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';
import SobreMi from './components/SobreMi';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <SobreMi/>
    </div>
  )
}

export default App;