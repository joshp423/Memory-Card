import { useState, useEffect } from "react";
import './card.css'

async function getImage(playerName) {
    try {
        const response = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${playerName}`
        )
        const playerData = await response.json();
        console.log(playerData)
        return playerData.player[0].strThumb

    } catch (error) {
        console.error("Fetch error:", error)
    }
}

function Card({ name, clickedList, setClickedList, score, setScore, bestScore, setBestScore, setPlayerArray, playerList}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        async function loadImage() {
            const img = await getImage(name);
            setImage(img);
        }
        loadImage();
    }, [name]); // dependency array - run this whenever name changes
    
    const playerName = name.replace("_", " ")

    return (
        <div
            className="nameCard"
            id={name}
            onClick={(e) => updateClickedList(e, clickedList, setClickedList, score, setScore, bestScore, setBestScore, setPlayerArray, playerList)}
        >
            <img src={image} alt={name + " image"} />
            <h1>{playerName}</h1>
        </div>
    )
}

function updateClickedList(e, clickedList, setClickedList, score, setScore, bestScore, setBestScore, setPlayerArray, playerList) {

    function clickedNameCheck(){
        if (clickedList.has(e.currentTarget.id)) {
            return true; 
        }
        return false;
    }


    clickedNameCheck()
    console.log(clickedList)

    if (clickedNameCheck()) {
        setScore(0);
        setClickedList(new Set());
    }
    else {
        const updatedSet = new Set(clickedList)
        updatedSet.add(e.currentTarget.id)
        setClickedList(updatedSet)

        setScore(score + 1)
        if (score + 1 > bestScore) {
            setBestScore(score +1)
        }
    }

    setPlayerArray(shuffleArray(playerList))
    
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export default function CardSection({ score, setScore, bestScore, setBestScore }) {

    const playerList = ["Jalen_Brunson", "Donovan_Mitchell", "Jayson_Tatum", "Giannis_Antetokounmpo", "Luka_Dončić", "Kyrie_Irving", "Stephen_Curry", "Lebron_James", "Kevin_Durant", "Nikola_Jokić"];
    
    const [playerArray, setPlayerArray] = useState(shuffleArray(playerList));

    const [clickedList, setClickedList] = useState(new Set());

    return (
        <div className="cardSection">
            {playerArray.map((e) => 
                <Card
                    name={e}
                    clickedList={clickedList}
                    setClickedList={setClickedList}
                    setPlayerArray={setPlayerArray}
                    playerList={playerList}
                    score={score}
                    setScore={setScore}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                />
            )}
        </div>
    )

}