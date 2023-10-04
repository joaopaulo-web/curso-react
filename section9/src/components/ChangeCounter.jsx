// 3 - Alterando contexto

import {useContext, useState} from "react";

import {CounterContext} from "../context/CounterContext.jsx";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Adicione valor ao contador</button>
        </div>
    )
}

export default ChangeCounter