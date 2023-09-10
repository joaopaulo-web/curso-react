
// @ts-ignore
const UserDetails = ({nome, idade, profissao}) => {

    const maiorIdade = 18
    return (
        <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                {idade >= maiorIdade ? (
                    <div>
                        <p>Usuário pode tirar carteira de habilitação</p>
                    </div>
                ) : (
                    <div>
                        <p>Usuário é menor de idade</p>
                    </div>
                )}
                <li>Profissão: {profissao}</li>
            </ul>
        </div>
    )
}

export default UserDetails