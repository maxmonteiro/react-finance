import useGetCurrency from '@/source/hooks/useGetCurrency';
import styles from './CategoryCard.module.scss';
import {TbPencil} from 'react-icons/tb';
import CategoryMenu from './CategoryMenu';
import { useState } from 'react';


const CategoryCard = ({ data }) => {

    const { title, amount, percentage } = data;
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenuHandler = () => setIsVisible(!isVisible);

    const formatedAmount = useGetCurrency(amount);

    return (
        <div className={styles.card}>
            <div className={styles.edit} onClick={toggleMenuHandler}>
                <TbPencil className='icon hover'/>
                {isVisible ? <CategoryMenu /> : null}
            </div>
            <h2>{title}</h2>
            <h3>{formatedAmount}</h3>
            <h4>Alocado: {percentage}%</h4>
        </div>
    )
}

export default CategoryCard;