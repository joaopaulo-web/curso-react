import "./MyComponent.css"

const MyComponent = () =>{
    return(
        <div>
            <h1>Css de componente</h1>
            <p>Este é o parágrafo de estilo do componente. Está localizado dentro do componente.</p>
            <p className="p-component">Este também esta no componente, mas com outra classe.</p>
        </div>
    )
}

export default MyComponent