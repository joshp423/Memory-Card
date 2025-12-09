import './header.css'

function Score({ gameScore }) {
    return (
        <p>Score: {gameScore}</p>
    )
}

function BestScore({ bestScore }) {
    return (
        <p>Best Score: {bestScore}</p>
    )
}



export default function Header({ gameScore, bestScore }) {
    return (
        <div className="headerContainer">

            <div className="headerLeft">
                <h1>NBA Player Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>

            <div className="headerRight">
                <Score gameScore={gameScore}/>
                <BestScore bestScore={bestScore}/>
            </div>
            
        </div>
    )
}