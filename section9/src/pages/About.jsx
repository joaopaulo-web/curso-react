// import {useContext} from "react";
// import {CounterContext} from "../context/CounterContext.jsx";

import {useCounterContext} from "../hooks/useCounterContext.jsx";

const About = () => {

    const {counter} = useCounterContext()

    return (
        <div>
            <h1>About</h1>
            <p>Valor do Contador: {counter}</p>

        </div>
    )
}

export default About