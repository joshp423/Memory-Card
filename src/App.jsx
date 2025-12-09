import { useState } from "react";
import CardSection from "./components/card";
import Header from "./components/header";

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='App'>
      <Header gameScore={score} bestScore={bestScore}/>
      <CardSection
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  )
}

export default App
