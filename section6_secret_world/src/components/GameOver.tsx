import './GameOver.css'

// @ts-ignore
const GameOver = ({retry}) => {
    return(
        <div>
            <h1>GameOver</h1>
            <button onClick={retry}>Clique para jogar novamente</button>
        </div>
    )
}

export default GameOver