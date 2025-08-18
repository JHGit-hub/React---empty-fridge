import { NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { LuBook } from "react-icons/lu";
import { useFavorite } from "../../contexts/FavoriteContext";

export default function Navbar() {

    const { favorites } = useFavorite();

    return (
        // Composant qui affiche la navbar de l'application
        // effet de style selon si la page est active ou non
        <div className="navbar">
            <NavLink to="/home"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <GoHome size={26} />
            </NavLink>
            <NavLink to="/list-recipe"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <IoIosList size={26} />
            </NavLink>
            <NavLink to="/favorite"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <LuBook size={26} />
            </NavLink>
            {/* Affichage du nombre de favoris, si diffrent de 0 */}
            {favorites.length !== 0 ? <div className="favorite-nbr"><p>{favorites.length}</p></div> : ""}
        </div>

    )
}

