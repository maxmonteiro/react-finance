import styles from './CardMenu.module.scss';

const CardMenu = () => {
    return (
        <div className={styles.card}>
            <div>
                <ul className={styles.list}>
                    <li>Editar</li>
                    <li>Adicionar</li>
                    <li>Remover</li>
                </ul>
            </div>
        </div>
    )
}

export default CardMenu;