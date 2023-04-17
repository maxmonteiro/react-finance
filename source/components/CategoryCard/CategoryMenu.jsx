import { useEffect, useRef } from "react";
import CardMenu from "../UI/CardMenu";

const CategoryMenu = ({toggleMenuHandler}) => {
    const menuRef = useRef();

    useEffect(() => {
        const clickHandler = (e) => {
            if (!menuRef.current.contains(e.target)) toggleMenuHandler();
        }

        document.addEventListener('mousedown', clickHandler);

        return () => {
            document.removeEventListener('mousedown', clickHandler);
        }
    }, [])

    return (
        <CardMenu ref={menuRef}>
            <li>Editar</li>
            <li>Adicionar</li>
            <li>Descontar</li>
            <li>Transferir</li>
        </CardMenu>
    )
}

export default CategoryMenu;