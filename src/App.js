// import logo from './logo.svg';
import './App.css';
// import {useState} from 'react';
// import Count from './components/Count';
// import Button from './components/Button';
import CountApp from './components/CountApp';


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      {/* <Count count={count}/>
      <Button setCount={setCount} count={count}/> */}
      <CountApp/>
      <CountApp/>
      <CountApp/>
    </div>
  );
}

export default App;
