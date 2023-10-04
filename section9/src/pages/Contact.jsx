import {useContext} from "react";
import {CounterContext} from "../context/CounterContext.jsx";

const Contact = () => {

    const {counter} = useContext(CounterContext)

    return (
        <div>
            <h1>Contato</h1>
            <p>Valor do Contador: {counter}</p>
        </div>
    )
}

export default Contact