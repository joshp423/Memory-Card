import { useState, useEffect } from "react";


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

function Card({ name }) {
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
        <div className="nameCard">
            <img src={image} alt={name + " image"} />
            <h1>{playerName}</h1>
        </div>
    )
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


export default function CardSection() {

    const playerList = ["Jalen_Brunson", "Donovan_Mitchell", "Jayson_Tatum", "Giannis_Antetokounmpo", "Luka_Dončić", "Kyrie_Irving", "Stephen_Curry", "Lebron_James", "Kevin_Durant", "Nikola_Jokić"];
    
    const [playerArray] = useState(() => shuffleArray(playerList));
    
    return (
        <div className="CardSection">
            <Card name = {playerArray[0]}/>
        </div>
    )
}