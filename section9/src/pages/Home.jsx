//import {useContext} from "react";
//import {CounterContext} from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";


// Refatorando com hook
import {useCounterContext} from "../hooks/useCounterContext.jsx";

// Context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

// Alterando state complexo
const setTitleColor = (color) => {
    dispatch({type: color})
}

const Home = () => {

    //const  {counter} = useContext(CounterContext)

    const {counter} = useCounterContext()

    // contexto mais complexo

    const {color} = useTitleColorContext()

    return (
        <div>
            <h1 style={{color: color}}>Home</h1>
            <p>Valor do Contador: {counter}</p>
            {/*Alterando valor do Context*/}
            <ChangeCounter />

            {/*Alterando contexto complexo*/}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>  
        </div>
    )
}

export default Home