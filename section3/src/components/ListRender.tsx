import {useState} from "react";
const ListRender = () => {

    //Constante iniciada como uma string.
    const [list] = useState(["Matheus", "Joao", "Sarah", "Fernanda"])

    //Constante iniciada como uma string de vários valores.
    const [users, setUsers] = useState([
        {id:1, name:"Matheus", age:21},
        {id:2, name:"João", age:27},
        {id:3, name:"Pedro", age:41}
    ])

    // Função responsável por deletar um usuário aleatório da lista.
    const deleteRandom = () => {

        //Constante responsável por selecionar um número de 0 a 3
        const randomNumber = Math.floor(Math.random() * 4)

        //Esta expressão vai retornar o id do usuário que será excluído.
        setUsers((prevUsers) => {

            //cria uma nova lista contendo apenas os elementos que atendem a função callback
            return prevUsers.filter((user) => randomNumber !== user.id)
            //(user) - é um parâmetro da função de callback que representa cada elemento (objeto de usuário) da lista prevUsers enquanto o método filter percorre a lista.
            //randomNumber é a constante que possui o valor de ID a ser excluído
            //Vai retornar apenas se o número de ID for diferente de randomNUmber
        })
    }
    return(
        <div>
            {/*o código renderiza uma lista não ordenada <ul> onde cada item da matriz list é representado como um elemento de lista <li>. A propriedade key é usada para garantir que cada elemento seja exclusivo no contexto da renderização React*/}
            <ul>
                {list.map((item,i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}> {user.name} - {user.age} </li>
                    );
                })}
            </ul>
            <button onClick={deleteRandom}> Delete random user</button>
        </div>
    )
}

export default  ListRender