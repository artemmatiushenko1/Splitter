import './App.css';
import Calculator from './components/Calculator.jsx';
import { ReactComponent as LogoIcon } from './assets/images/logo.svg';

const App = () => {
  return (
    <div className="app">
      <div className="app__logo">
        <h1 className="app__name">SPLITTER</h1>
        <LogoIcon />
      </div>
      <Calculator />
    </div>
  );
};

export default App;
