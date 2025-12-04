import { useState } from 'react';
import Card from './components/card';
import './App.css';

function App() {

  const playerArray = ["Jalen_Brunson", "Donovan_Mitchell", "Jayson_Tatum", "Giannis-Antetokounmpo", "Karl-Anthony_Towns", 	"Shai_Gilgeous-Alexander", "Stephen_Curry", "Lebron_James", "Kevin_Durant", "Nikola_Jokić"];
  //randomise index to reference - will need to not duplicate

  function randomPlayer(playerArray) {
    
  }

  return (
    <>
      <Card
        name = "Luka_Dončić"
      />
      <Card
        name = "Lebron_James"
      />
      <h1>bre</h1>
    </>
  )
}

export default App
