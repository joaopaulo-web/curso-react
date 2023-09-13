
import './App.css'
import MyForm from "./components/MyForm.tsx";

function App() {

  return (
    <>
        <div>
            <h1>Forms</h1>
        </div>
        <MyForm user={{name: "Josias", email: "josias@gmail.com", bio:"Sou um advogado", role:"admin"}}/>
    </>
  )
}

export default App
