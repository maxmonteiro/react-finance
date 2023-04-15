import styles from './AllCards.module.scss'
import CategoryCard from "./CategoryCard";
import NoCard from './NoCard';

const AllCards = () => {
    return (
        <section className={styles.section}>
            <CategoryCard />
            <CategoryCard />
            <NoCard />
        </section>
    )
}

export default AllCards;