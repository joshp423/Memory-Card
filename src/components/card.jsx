import { useState } from "react";
import { useEffect } from "react";


async function getImage(playerName) {
    try {
        const response = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${playerName}`
        )
        const playerData = await response.json();
        console.log(playerData)
    }
}

export default function Card({ name }) {
    return (
        <div className="nameCard">
            <img src="" alt="" />
            <h1>{name}</h1>
        </div>
    )
}