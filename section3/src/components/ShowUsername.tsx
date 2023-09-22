
// @ts-ignore
const ShowUsername = (props) => {
    //Props sendo passada como argumento para ser usada na função
    return (
        <div>
            <h2> O nome do usuário é: {props.name}</h2>
            {/*props.name é o método de chamar as propriedades que foi passado no início. Name é a props*/}
        </div>
    )
}

export default  ShowUsername