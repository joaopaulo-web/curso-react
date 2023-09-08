export function Challenge(){
    const valor1 = 21;
    const valor2 = 41;

    function handleMySoma(){
        const resultado = valor1 + valor2
        alert(resultado)
    }
    return (
        <div>
            <div>
                <p>Primeiro Valor: {valor1}</p>
                <p>Segunda Valor: {valor2}</p>
                <button onClick={handleMySoma}>Clique para somar os dois valores!</button>
            </div>
        </div>
    )
}