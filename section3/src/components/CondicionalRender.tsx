import {useState} from "react";

const CondicionalRender = () => {

    //Constante iniciada com o useState passando o valor de true. Esta variável irá ser utilizada para executar testes lógicos.
    const [x] = useState(true)

    //Constante name iniciada juntamente do setName. Valor inicial = Matheus
    const [name, setName] = useState("Matheus")

    return(
        <div>
            {/*Primeiros testes condicionais. Ambos os testes são determinados conforme o estado iniciado*/}
            <h1>Isso será exibido?</h1>
            {x && <p>Foi renderizado pois x foi iniciado como true.</p>}
            {!x && <p>Foi renderizado pois x foi iniciado como falso.</p>}
            <h1>If ternário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome iniciado foi: {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome iniciado não encontrado</p>
                    <button onClick={() => setName("João")}>Clique aqui e altere o estado do nome iniciado e descubra o nome correto. </button>
                </div>
            )}
            {/*Caso a variável name for iniciada com o valor de "João", a condição verdadeira será satisfeita e o primeiro bloco será executada*/}
            {/*Caso contrário, será impresso na tela que o nome inicial não foi encontrado e irá ser impresso na tela um botão que ao clicar, o hook setName será chamado e o nome correto irá aparecer*/}
        </div>
    )
}

export default CondicionalRender