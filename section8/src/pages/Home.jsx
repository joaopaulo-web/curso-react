import {Link} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch.js";
import './Home.css'

const Home = () => {

    //Carregamento de Dados
    const url = 'http://localhost:3000/products'

    //Propriedades que chegam do hook
    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map(item =>(
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        {/*Rota dinâmica*/}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home