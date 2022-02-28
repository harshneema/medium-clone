import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Trending from './components/Trending';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing />
      <Trending />
      <Main />
    </div>
  );
}

export default App;
