import './Game.css'

// @ts-ignore
const Game = ({verifyLetter}) => {
    return(
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter}>Finalizar Jogo</button>
        </div>
    )
}

export default Game