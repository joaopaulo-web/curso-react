import "./MyForm.css"
import {useState} from "react";
const MyForm = () => {
    // 3- Gerenciamento de dados

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    // @ts-ignore
    const handleName = (e) => {
        setName(e.target.value)
    }
    // @ts-ignore
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    console.log(name)
    console.log(email)

    return (
        <div>
            <h3>Criação do 1º Form</h3>
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
                </div>
                {/*Label envolvendo input*/}
                <label>
                    <span>E-mail: </span>
                    <input type="email"
                           name="email"
                           placeholder="Digite o seu email"
                           onChange={handleEmail}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export  default MyForm