import './App.css';
import logo from './images/logo.png';
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <header>
      <img src={logo} alt="this is logo" />
      </header>
      <Signup/>
    </div>
  );
}

export default App;