//CSS
import './App.css'

//Components
import StartScreen from "./components/StartScreen.tsx";
import Game from "./components/Game.tsx";
import GameOver from "./components/GameOver.tsx";

//React
import {useCallback, useEffect, useState} from "react";

//Dados
// @ts-ignore
import {wordsList} from './data/words.js'


const stages = [
    {id:1, name: "start"},
    {id:2, name: "game"},
    {id:3, name: "end"}
]

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name)
    const [words] = useState(wordsList)

    const [pickedWord, setPickedWord] = useState("")
    const [pickedCategory, setPickedCategory] = useState("")
    const [letters, setLetters] = useState([])

    const pickWordAndCategory = () => {
        //randomiza a categoria
        const categories = Object.keys(words)
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
        console.log(category)

        //randomiza a palavra
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        console.log(word)

        return {word, category}
    }
    const startGame = () => {
        //escolher categoria e palavra
        // @ts-ignore
        const {word, category} = pickWordAndCategory()

        //cria o array de letras
        let wordLetters = word.split("")
        // @ts-ignore
        wordLetters = wordLetters.map((l) => l.toLowerCase())
        console.log(word, category)
        console.log(wordLetters)

        //Fill states
        setPickedWord(word)
        setPickedCategory(category)
        setLetters(letters)


        //Starta o game
        setGameStage( stages[1].name)
    }

    const verifyLetter = () => {
        //Processa a letra que o usuário digitou
        setGameStage( stages[2].name)
    }

    const retry = () =>{
        //Volta para a tela inicial do game
        setGameStage(stages[0].name)
    }
    console.log(words)

  return (
    <>
        <div className="container">
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
            {gameStage === "end" && <GameOver retry={retry}/>}
        </div>
    </>
  )
}

export default App
