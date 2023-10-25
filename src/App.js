import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import CricketersList from './components/CricketersList';

function App() {

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <CricketersList></CricketersList>
    </div>
  );
}

export default App;
