import { useEffect, useState} from 'react'
import './App.css';

import io from "socket.io-client"

const socket = io.connect('http://localhost:4000')

function App() {
  const [state, setState] = useState([]);
  const [value, setValue] = useState('');
  const onSubmit = () => {
    socket.emit('message', value);
  }

  useEffect(() => {
    socket.on('message', (data) => {
      setState(prev=>{
        const test = [...prev, data];
        
        return test;
      });
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Chat APP
        {state.map(d=><p key={d}>{d}</p>)}
        {value}
      <input value={value} onChange={e=>setValue(e.target.value)}></input>
      <button onClick={onSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
