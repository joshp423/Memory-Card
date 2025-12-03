import { useState } from "react";
import { useEffect } from "react";

export default function Card({ name }) {
    return (
        <div className="nameCard">
            <img src="" alt="" />
            <h1>{name}</h1>
        </div>
    )
}