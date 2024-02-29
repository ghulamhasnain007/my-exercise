import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Component/Navbar';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'; 
import ActionAreaCard from './Component/FirstCard';
import SecondActionAreaCard from './Component/SecondCard';
import ThirdActionAreaCard from './Component/ThirdCard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ResponsiveAppBar/>
      <div className='aaa'>
        <h1>My Site</h1>
      <h3>Dinosaurous are Cool</h3>
      <span className='bbb'><strong>Dinosaurus are Amazing - 5 min <AccessAlarmsIcon></AccessAlarmsIcon></strong></span>
      </div>
      <span className='card'>
        <ActionAreaCard/>
      </span>
        <span className='card'>
          <SecondActionAreaCard/>
        </span>
        <span className='card'>
          <ThirdActionAreaCard/>
        </span>
      
    </div>
  );
}

export default App;
