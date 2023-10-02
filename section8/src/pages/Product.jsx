import {Link, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.js";

const Product = () => {
    // Rota dinâmica
    const { id } = useParams()

    //Carregamento de dado individual
    const url = 'http://localhost:3000/products/' + id

    const {data: product, loading, error} = useFetch(url)

    return (
        <>
            <p> ID do produto: { id } </p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h3>Produto: {product.name}</h3>
                    <p>R$ {product.price}</p>
                    {/*Nested Routes*/}
                    <Link to={`/products/${product.id}/info`}> Mais Informações </Link>
                </div>
            )}
        </>


    )
}

export default Product