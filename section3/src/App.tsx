import './App.css'
import {Sizeimg} from "./components/Sizeimg.tsx";
import ManageData from "./components/ManageData.tsx";
import ListRender from "./components/ListRender.tsx";
import CondicionalRender from "./components/CondicionalRender.tsx";
import ShowUsername from "./components/ShowUsername.tsx";
import CarDetails from "./components/CarDetails.tsx";
import {useState} from "react";
import Fragments from "./components/Fragments.tsx";
import Container from "./components/Container.tsx";
import ExecuteFunction from "./components/ExecuteFunction.tsx";
import Message from "./components/Message.tsx";
import ChangeMessage from "./components/ChangeMessage.tsx";
import UserDetails from "./components/UserDetails.tsx";

function App() {

    const [userName] = useState("Maria")

    const cars = [
        {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
        {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 123},
        {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 1414}
    ]

    const pessoas =[
        {nome: "Jorge", idade: 21, profissao: "Professor"},
        {nome: "Pedro", idade: 42, profissao: "Vendedor"},
        {nome: "Maria", idade: 35, profissao: "Médica"},
        {nome: "José", idade: 15, profissao: "Estudante"}
    ]
    const [message, setMessage] = useState("")

    // @ts-ignore
    const handleMessage = (msg) => {
        setMessage (msg)
    }

    function showMessage(){
        alert ("Evento do componente pai")
    }

  // @ts-ignore
    return (
    <>
      <div>
          <h1>Hello Section 3</h1>
          <Sizeimg />
      </div>
        <hr/>
      <ManageData />
        <ListRender />
        <CondicionalRender />
        <h4>Utilizando props </h4>
        <ShowUsername name={userName} />
        <hr/>
        <h4>Destructuring</h4>
        <CarDetails brand = "VW" km = {100000} color="Azul" newCar="false"/>
        <hr/>
        <h4>Reaproveitando dados</h4>
        <CarDetails brand = "Ford" km = {0} color="Preto" newCar="true" />
        <CarDetails brand = "Fiat" km = {4500} color="Branco" newCar="false"/>
        <hr/>
        <h4>Loop em array de objetos</h4>
        {cars.map((car) => (
            <CarDetails
                key = {car.id}
                brand = {car.brand}
                color={car.color}
                km={car.km}
                newCar={car.newCar}/>
        ))}
        <h4>Fragment</h4>
        <Fragments />
        <hr/>
        <h4>Children</h4>
        <Container>
            <p>E este é o conteúdo</p>
        </Container>
        <hr/>
        <h4>Executar função</h4>
        <ExecuteFunction myFunction={showMessage} />
        <hr/>
        <h4>State Lift</h4>
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
        <hr/>
        <h4>Desafio 4</h4>
        {pessoas.map((dados) => (
            <UserDetails
                nome ={dados.nome}
                idade = {dados.idade}
                profissao = {dados.profissao}
            />
        ))}

    </>
  )
}

export default App