import { useFavorite } from "../../contexts/FavoriteContext";
import { MdBookmarkBorder } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";


export default function Card({ recipe }) {

    const { favorites } = useFavorite();

    return (
        <div className="card">
            <div className="card-img">
                <img src={recipe.image} alt={`illustration de la recette ${recipe.nom}`} />
            </div>
            <div className="card-text">
                <h4>{recipe.nom}</h4>
            </div>
            <div className="favorite-mark">{favorites.includes(recipe.id) ? <IoMdBookmark size={24} /> : ""}</div>
        </div>
    );
}
