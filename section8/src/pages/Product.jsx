import {useParams} from "react-router-dom";

const Product = () => {
    // Rota dinâmica

    const { id } = useParams()

    return (
        <p> ID do produto: { id } </p>
    )
}

export default Product