import './App.css'
import MyComponent from "./components/MyComponent.tsx";
import {useState} from "react";
import Title from "./components/Title.tsx";

function App() {
    const n = 15

    const [name] = useState("Matheus")

    const redTitle = true
  return (
    <>
      <h1>React com CSS</h1>
        <MyComponent />
        <p>Este parágrafo está no App.tsx</p>
        <p style={{
            background:"gold",
            color:"black",
            borderTop:"2px solid blue"}}>
            Este elemento foi estilizado de forma inline</p>
        <h2 style={n < 10 ? ({background:"purple"}) : ({background:"pink"})}>Css Dinâmico</h2>
        <h2 style={n > 10 ? ({background:"purple"}) : ({background:"pink"})}>Css Dinâmico</h2>
        <h2 style={name == "Matheus" ? ({background:"green"}) : ({background:"blue"})}>Css Dinâmico</h2>
        <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
        <Title />
    </>
  )
}

export default App
