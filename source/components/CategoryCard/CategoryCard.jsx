import styles from './CategoryCard.module.scss';

const CategoryCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.edit}>
                <span></span>
            </div>
            <h2>Título</h2>
            <h3>R$ 4.300</h3>
            <h4>Alocado: 40%</h4>
        </div>
    )
}

export default CategoryCard;