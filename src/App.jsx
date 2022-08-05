import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() { //components fukcijos aprasymas

  const[jokes, setJokes]= useState([]);

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
    .then(res => setJokes(res.data.jokes));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Jokes</h1>
        <section>
          {
            jokes.map(j=> j.joke ? <li key={j.id}>{j.joke}</li> : <li key={j.id}>{j.setup}{j.delivery}</li>)
          }
        </section>

      </header>
    </div>
  );
}

export default App;
