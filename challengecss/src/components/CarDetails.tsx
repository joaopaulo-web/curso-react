import styles from "./CarDetails.module.css"
// @ts-ignore
const CarDetails = ({brand, km, color, newCar}) => {
    return(
        <div>
            <h2 className={styles.main_header}>Detalhes do Carro</h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.list_item1}>Marca: {brand}</li>
                    <li className={styles.list_item2}>KM: {km}</li>
                    <li className={styles.list_item1}>Cor: {color}</li>
                </ul>
                {newCar && <p className={styles.p_new}>Este carro é novo</p>}
            </div>
        </div>
    )
}

export default CarDetails