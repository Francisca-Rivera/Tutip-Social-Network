import logo from './assets/newTutipFilled.png';
import logOut from './assets/logOut.svg';
import './App.css';

function App() {
  return (
    <div className="homeContainer">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logOut} className="App-logOut" alt="logOut" />
      </header>
    </div>
  );
}

export default App;
