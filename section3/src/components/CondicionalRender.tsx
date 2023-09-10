import {useState} from "react";

const CondicionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Matheus")

    return(
        <div>
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
        </div>
    )
}

export default CondicionalRender