import {useState} from "react";

// função responsável por alterar algum dado.
const ManageData = () => {

    //Variável iniciada com o valor de 10
    let someData = 10;

    //Constante number iniciada juntamente com o setNumber. Number é iniciado com o valor 50.
    const [number, setNumber] = useState(50);

    return (
        <div>
            <div>
                {/*Variável que foi iniciada com o valor 10 irá aparecer.*/}
                <p>Valor: {someData}</p>
                {/*Botão que ao ser clicado, irá puxar a variável someData e passar o novo valor para ela*/}
                <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>
            <div>
                {/*Variável que foi iniciada como 50 irá aparecer*/}
                <p>Valor: {number}</p>
                {/*Botão que ao clicar ira alterar o valor de 50 para 25 através do useState*/}
                <button onClick={() => setNumber(25)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData