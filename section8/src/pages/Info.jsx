import {useParams} from "react-router-dom";

const Info = () => {

    const { id } = useParams()

    return (
        <>
            <h3>Mais informações sobre o produto: {id}</h3>
        </>
    )
}

export default Info