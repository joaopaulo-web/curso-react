import "./MyForm.css"
import {useState} from "react";
// @ts-ignore
const MyForm = ({user}) => {
    //6 - Controlled Inputs

    // 3- Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

    // @ts-ignore
    const handleName = (e) => {
        setName(e.target.value)
    }
    // @ts-ignore
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Formulário Enviado")
        console.log(name, email, bio, role)

        // limpando formulário

        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }
    return (
        <div>
            <h3>Criação do 1º Form</h3>
            {/*Envio do Form*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text"
                           name="name"
                           placeholder="Digite o seu nome"
                           onChange={handleName}
                            value={name}/>
                </div>
                {/*Label envolvendo input*/}
                <label>
                    <span>E-mail: </span>
                    <input type="email"
                           name="email"
                           placeholder="Digite o seu email"
                           onChange={handleEmail}
                           value ={email}/>
                </label>
                {/*Text area*/}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio"
                              placeholder="Descrição do usuário"
                              onChange={(e) => setBio(e.target.value)}
                              value={bio}></textarea>
                </label>
                {/*Select*/}
                <label>
                    <span>Função no sistema</span>
                    <select name="role"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export  default MyForm