import styles from './AllCards.module.scss'
import CategoryCard from "./CategoryCard";

const AllCards = () => {
    return (
        <section className={styles.section}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </section>
    )
}

export default AllCards;