import CarDetails from "./components/CarDetails.tsx";
import './App.css'

function App() {

    const cars = [
        {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
        {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 123},
        {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 1414}
    ]

  return (
    <>
        <div>
            <h1>Desafio Seção CSS</h1>
        </div>
        {cars.map((car) => (
            <CarDetails
                key = {car.id}
                brand = {car.brand}
                color={car.color}
                km={car.km}
                newCar={car.newCar}/>
        ))}
    </>
  )
}

export default App
