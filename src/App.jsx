import { useEffect, useState } from 'react';
import Card from './components/card';
import './App.css';

function App() {

  const [playerArray, setPlayerArray] = useState(["Jalen_Brunson", "Donovan_Mitchell", "Jayson_Tatum", "Giannis_Antetokounmpo", "Karl-Anthony_Towns", 	"Shai_Gilgeous-Alexander", "Steph_Curry", "Lebron_James", "Kevin_Durant", "Nikola_Jokić"]);
  //randomise index to reference - will need to not duplicate
  
  function randomPlayer() {
    const usedNumbers = [];
    let newPlayerArray = [];
    while (newPlayerArray.length < 10) {
      let number = Math.floor(Math.random() * 10);
      while (usedNumbers.includes(number)) {
        number = Math.floor(Math.random() * 10);
      }
      usedNumbers.push(number)
      newPlayerArray.push(playerArray[number])
    }

    return newPlayerArray
  }
  useEffect(() => {
    const newPlayerArray = randomPlayer()
    setPlayerArray(newPlayerArray)
  }, []);
  

  return (
    <>
      <Card
        name = {playerArray[0]}
      />
      <Card
        name = {playerArray[1]}
      />
      <Card
        name = {playerArray[2]}
      />
      <Card
        name = {playerArray[3]}
      />
      <Card
        name = {playerArray[4]}
      />
      <Card
        name = {playerArray[5]}
      />
      <Card
        name = {playerArray[6]}
      />
      <Card
        name = {playerArray[7]}
      />
      <Card
        name = {playerArray[8]}
      />
      <Card
        name = {playerArray[8]}
      />
      <h1>bre</h1>
    </>
  )
}

export default App
