import './App.css'
import {useState, useEffect} from "react";

// 4 Custom Hook

import {useFetch} from "./hooks/useFetch.js";

const url = "http://localhost:3000/products"

function App() {

    const [products, setProducts] = useState([])

    // 4 Custom hook

    const {data: items, httpConfig, loading, error} = useFetch(url)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    //Resgatando os dados
    // useEffect(() => {
    //     async function fetchData(){
    //
    //         const res = await fetch (url)
    //
    //         const data = await res.json()
    //
    //         setProducts(data)
    //     }
    //
    //     fetchData()
    // }, []);



    //Adição de produtos
    const handleSubmit = async (e) => {
        //Impede que a página seja recarregada ao envio do formulário. Deixando assim a const lidar com o envio do formulário.
        e.preventDefault()

        //O objeto principal chamado product é iniciado. Ele possui duas propriedades. Esses valores serão utilizados como parte do corpo da solicitação.
        const product = {
            name,
            price,
        }

        //Este bloco faz uma solicitação HTTP utilizando a função fetch. Ela envia uma solicitação POST para o URL especificado na variável url.
        //O await é usado para esperar que a solicitação seja concluída antes de prosseguir com a execução do código. Como a função handleSubmit é assíncrona, o uso de await permite que a função aguarde a conclusão da solicitação antes de continuar.
        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(product),
        // })
        //
        // // 3 - Carregamento dinâmico
        //
        // const addedProduct = await res.json()
        //
        // setProducts((prevProducts) => [...prevProducts, addedProduct])

        // 5 - Refatorando POST
        httpConfig(product, "POST")

        setName("")
        setPrice("")
    }

    //desafio 6

    const handleRemove = (id) => {
        httpConfig(id, 'DELETE')
    }

  return (
    <>
      <h1>Lista de Produtos</h1>
        {/*6 - Loading*/}
        {loading && <p> Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
            <ul>
                {items &&
                    items.map((product) => (
                    <li key={product.id}>
                        {product.name} - R$: {product.price}
                        <button onClick={() => handleRemove(product.id)}>Excluir</button>
                    </li>
                ))}
                {/*Parte do código responsável por mapear cada elemento da string e tornar uma nova string. Diferenciando cada nova string por um valor único (id). Cada novo valor vai ser disposto em uma concatenação de li com o valor do nome e do preço.*/}
            </ul>
        )}
        <div className="add-product">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text"
                           value={name}
                           name="name"
                           onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Preço:
                    <input type="number"
                           value={price}
                           name="price"
                           onChange={(e) => setPrice(e.target.value)}/>
                </label>
                {/*7 - State de loading no post*/}
                {loading && <input type="submit" disabled value="Aguarde"/>}
                {!loading && <input type="submit" value="Criar"/>}
            </form>
        </div>
    </>
  )
}

export default App
