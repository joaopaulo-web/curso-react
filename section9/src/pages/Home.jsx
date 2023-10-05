//import {useContext} from "react";
//import {CounterContext} from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";


// Refatorando com hook
import {useCounterContext} from "../hooks/useCounterContext.jsx";

const Home = () => {

    //const  {counter} = useContext(CounterContext)

    const {counter} = useCounterContext()

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do Contador: {counter}</p>
            {/*Alterando valor do Context*/}
            <ChangeCounter />
        </div>
    )
}

export default Home