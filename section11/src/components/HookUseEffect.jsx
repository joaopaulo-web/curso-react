import { useEffect, useState } from "react"

const HookUseEffect = () => {

    //1 - useEffect Sem dependencias

    useEffect(() => {
        console.log("ESTOU SENDO EXECUTADO")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 useEffect com array de dependecia vazio

    useEffect(() => {

        console.log("Estou sendo executado apenas uma vez ")

    },[])


    // 3 useEffect com array de dependecia

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {

        if (anotherNumber > 0) {
            console.log("Sendo executado apenas quando o anotherNumber é mudado")
        }
    }, [anotherNumber])
    

  return (
    <div>
        <h2>UseEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar another NUmber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect