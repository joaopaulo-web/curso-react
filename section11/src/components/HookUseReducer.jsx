import { useReducer, useState } from "react"


const HookUseReducer = () => {

    //1 - Começando com o useReducer

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })


     // 2 - Avançando com o useReducer

    // Tasks iniciais que vão aparecer ao recarregar a página.
     const initialTasks = [
        {id: 1, text: "Faça algo"},
        {id: 2, text: "Faça a segunda coisa"}
     ]


     // Reducer contendo o estado e a ação juuntamente dos casos.
     const taskReducer = (state, action) => {
        //Switchs com os tipos de ação
        switch (action.type) {

            // Caso de ação ADD, será iniciado chamada a função newTask criando um objeto contendo um número aleatório para o ID e um texto que esta vindo do state.
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText 
                }
            // Reseta o estado do input
                setTaskText("")
            
            // Retorna os states passados e adiciona o novo em uma string
                return [...state, newTask]

            //Caso de delete, retorna um id que diferente do action
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state;
        }
     }

     // Estados sendo inicializados

     // taskText e setTaskText, sendo incializados como ummma string vazia
     const [taskText, setTaskText] = useState("")

     // reducer sendo iniciado com tasks e sendo passada a função dispatchTaks igualando a função taskReducer que contem os meus estados e iniciando com os valores de initialTasks
     const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

     
     // função que é ativada quando o formulário for enviado
     const handleSubmit = (e) => {
        //previne que o formulário seja enviado vazio e a página recarregue
        e.preventDefault()

        // A função dispatchTasks, do reducer, ira ativar o caso de ADD
        dispatchTasks({type: "ADD"})
     }

    // função que define a terefa que irá ser deletada.
     const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
     }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <hr />
        <h3>Tarefas:</h3>
        {/* Ao ser enviado, a função handleSubmit é disparada*/}
        <form onSubmit={handleSubmit}>
            {/* A qualquer mudança, é invocada a função do state e passado o valor para o taskText */}
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="Enviar"/>
        </form>
        {/* Mostra no front uuma lista com as tarefas */}
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
        <p>Clique duas vezes em uma tarefa para deleta-lá</p>
    </div>
  )
}

export default HookUseReducer