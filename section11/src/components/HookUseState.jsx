import { useState } from "react"

const HookUseState = () => {
  // 1- useState

  let username = "João"

  const [name, setName] = useState("Pedro")

  const changeNames = () => {

    setName("Matheus")
  }


  // 2 - useState e input

  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a api
    console.log(age)
  }
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
        <p>Variável: {username}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <hr />
        {/* 2 - useState e input */}
        <p>Digite a sua idade</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}/>
          <p>Você tem {age} anos</p>
          <input type="submit" value="Enviar"/>
        </form>
      <hr />
    </div>
  )
}

export default HookUseState