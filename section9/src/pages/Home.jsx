import {useContext} from "react";
import {CounterContext} from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";

const Home = () => {

    const  {counter} = useContext(CounterContext)
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