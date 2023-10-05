// import {useContext} from "react";
// import {CounterContext} from "../context/CounterContext.jsx";

import {useCounterContext} from "../hooks/useCounterContext.jsx";

const Contact = () => {

    const {counter} = useCounterContext()

    return (
        <div>
            <h1>Contato</h1>
            <p>Valor do Contador: {counter}</p>
        </div>
    )
}

export default Contact