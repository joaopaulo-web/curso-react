import './App.css'
import {Sizeimg} from "./components/Sizeimg.tsx";
import ManageData from "./components/ManageData.tsx";
import ListRender from "./components/ListRender.tsx";

function App() {

  return (
    <>
      <div>
          <h1>Hello Section 3</h1>
          <Sizeimg />
      </div>
      <ManageData />
        <ListRender />
    </>
  )
}

export default App