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
import {wordsList} from "./data/words.js"


const stages = [
    {id:1, name: "start"},
    {id:2, name: "game"},
    {id:3, name: "end"}
]

const guessesQty = 3

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name)
    const [words] = useState(wordsList)

    const [pickedWord, setPickedWord] = useState("")
    const [pickedCategory, setPickedCategory] = useState("")
    const [letters, setLetters] = useState([])

    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [guesses, setGuesses] = useState(guessesQty)
    const [score, setScore] = useState(0)

    const pickWordAndCategory = useCallback(() => {
        //randomiza a categoria
        const categories = Object.keys(words)
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
        console.log(category)

        //randomiza a palavra
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        console.log(word)

        return {word, category}
    },[words])
    // @ts-ignore
    const startGame = useCallback(() => {
        //escolher categoria e palavra
        // @ts-ignore
        const {word, category} = pickWordAndCategory()

        clearLetterStates()

        //cria o array de letras
        let wordLetters = word.split("")
        // @ts-ignore
        wordLetters = wordLetters.map((l) => l.toLowerCase())
        console.log(word, category)
        console.log(wordLetters)

        //Fill states
        setPickedWord(word)
        setPickedCategory(category)
        setLetters(wordLetters)


        //Starta o game
        setGameStage( stages[1].name)
    },[pickWordAndCategory])

    // @ts-ignore
    const verifyLetter = (letter) => {
        //Processa a letra que o usuário digitou
        const normalizedLetter = letter.toLowerCase()

        //checa se a letra ja foi utilizada
        // @ts-ignore
        if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
            return
        }

        // @ts-ignore
        if (letters.includes(normalizedLetter)){
            // @ts-ignore
            setGuessedLetters((actualGuessedLetters) => [
                ...actualGuessedLetters,normalizedLetter
            ]);
        }else{
            // @ts-ignore
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizedLetter
            ]);

            setGuesses((actualGuesses) => actualGuesses - 1)
        }

    }

    const clearLetterStates = () => {
        setGuessedLetters([])
        setWrongLetters([])
    }

    useEffect(() => {
        if (guesses <= 0){

            clearLetterStates()

            setGameStage(stages[2].name)
        }
    }, [guesses])

    useEffect(() => {

        const uniqueLetters =[... new Set(letters)]

        if (guessedLetters.length === uniqueLetters.length) {
            setScore((actualScore) => actualScore += 100)

            startGame()
        }
    }, [guessedLetters, letters, startGame]);

    const retry = () =>{
        setScore(0)
        setGuesses(guessesQty)

        //Volta para a tela inicial do game
        setGameStage(stages[0].name)
    }
    console.log(words)

  return (
    <>
        <div className="container">
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && <Game
                verifyLetter={verifyLetter}
                pickedWord={pickedWord}
                pickedCategory={pickedCategory}
                letters={letters}
                guessedLetters = {guessedLetters}
                wrongLetters = {wrongLetters}
                guesses = {guesses}
                score ={score}/>}
            {gameStage === "end" && <GameOver
                retry={retry}
                score={score}/>}
        </div>
    </>
  )
}

export default App
