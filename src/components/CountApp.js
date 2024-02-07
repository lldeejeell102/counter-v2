import Count from './Count';
import Button from './Button';
import {useState} from 'react'


function CountApp() {
  const [count, setCount] = useState(0)
    return (
      <div>
        <Count count={count}/>
        <Button setCount={setCount} count={count}/>
      </div>
    );
  }
  
  export default CountApp;