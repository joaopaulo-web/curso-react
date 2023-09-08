
export function Events(){

    function handleMyEvent(){
        return alert("Ativou o evento")
    }

    const renderAlgo = (x: boolean) => {
        if (x){
            return <h1>Renderizado com sucesso pelo true</h1>
        } else{
            return  <h1>Renderizado com sucesso pelo false</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
                <p>O botão esta sendo importado no App.tsx</p>
            </div>
            <div>
                <button onClick={() => alert("Clicou no segundo botão!")}>Ou Clique Aqui</button>
            </div>
            {renderAlgo(true)}
            {renderAlgo(false)}
        </div>
    )
}