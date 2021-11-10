import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const  App = () =>  {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/v1/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (!data.error) {
        setUsers(data)
      }
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
