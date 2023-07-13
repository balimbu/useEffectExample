import logo from './logo.svg';
import './App.css';
import Check1 from './components/Check1';
import Users from './components/Users';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      {/* add heading */}
      <h1> Welcome to useEffects Hook </h1>
      {/* add components */}
      <Check1/>
      <Users/>
      <Parent name ='John Doe' location = 'california'/>

    </div>
  );
}

export default App;
