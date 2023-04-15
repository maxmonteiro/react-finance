import styles from './CategoryCard.module.scss';
import {TbPencil} from 'react-icons/tb';

const CategoryCard = ({ data }) => {

    const { title, amount, percentage } = data;

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount);

    return (
        <div className={styles.card}>
            <div className={styles.edit}>
                <TbPencil className='icon hover'/>
            </div>
            <h2>{title}</h2>
            <h3>{currency}</h3>
            <h4>Alocado: {percentage}%</h4>
        </div>
    )
}

export default CategoryCard;