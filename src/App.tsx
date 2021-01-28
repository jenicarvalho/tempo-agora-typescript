import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Tempo } from './types/tempo';

function App() {

  const [cidade, setCidade] = useState<String>("")

  const [tempo, setTempo] = useState<Tempo>()

  const getTempo = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=3b7e07eb897fc608d941420f15a08881&units=metric`)
      .then(resposta => setTempo(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCidade(event.target.value)} />
      <button onClick={getTempo}>Ver tempo</button>

      <h1>Cidade</h1>
      { 
        <>
          <p>{tempo?.name}</p>
          <p>{tempo?.main.temp}</p>
          <p>{tempo?.main.temp_max}</p>
          <p>{tempo?.main.temp_min}</p>
        </>
      }

    </div>
  );
}

export default App;
