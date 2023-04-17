import { useEffect } from "react";
import CardMenu from "../UI/CardMenu";

const CategoryMenu = ({toggleMenuHandler}) => {

    useEffect(() => {
        const clickHandler = () => {
            toggleMenuHandler();
        }

        document.addEventListener('mousedown', clickHandler);

        return () => {
            document.removeEventListener('mousedown', clickHandler);
        }
    }, [])

    return (
        <CardMenu>
            <li>Editar</li>
            <li>Adicionar</li>
            <li>Descontar</li>
            <li>Transferir</li>
        </CardMenu>
    )
}

export default CategoryMenu;