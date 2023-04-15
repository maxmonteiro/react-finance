import styles from './AllCards.module.scss'
import CategoryCard from "./CategoryCard";
import NoCard from './NoCard';

const DUMMY_DATA = [
    { id: 1, title: 'essencial', amount: 1400, percentage: 10},
    { id: 2, title: 'investimento', amount: 800, percentage: 50},
]

const AllCards = () => {

    const cards = DUMMY_DATA.map((category) => (
        <CategoryCard key={category.id} data={category} />)
    );

    return (
        <section className={styles.section}>
            {cards}
            <NoCard />
        </section>
    )
}

export default AllCards;