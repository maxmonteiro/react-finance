import styles from './CategoryCard.module.scss';
import {TbPencil} from 'react-icons/tb';

const CategoryCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.edit}>
                <TbPencil className='icon hover'/>
            </div>
            <h2>Título</h2>
            <h3>R$ 4.300</h3>
            <h4>Alocado: 40%</h4>
        </div>
    )
}

export default CategoryCard;