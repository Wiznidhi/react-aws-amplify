import './App.css';
import logo from './images/logo.png';
import Signup from './components/Signup';

const App = () => {
  return (
    <div>
      <img src={logo} alt="this is logo" height = "100" width = "180"/>
      <Signup/>
    </div>
  );
}

export default App;