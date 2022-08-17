import './css/main.css';

// import components
import './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  )
}

export default App;