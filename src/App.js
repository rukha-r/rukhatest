import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get("https://rukha-merntest.herokuapp.com/getUser")
    .then( result => setData(result.data));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Fully working and deployed full stack app by me!</h3>
        <p>I just updated Front-end and Back-end and its fully working full-stack website!</p>
        <ol>
        { data.map(user => <li>{ user.name }</li>) }
        </ol>
      </header>
    </div>
  );
}

export default App;
