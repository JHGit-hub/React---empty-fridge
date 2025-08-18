import { useFavorite } from "../../contexts/FavoriteContext";
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
            {location.pathname === "/list-recipe" && <div className="favorite-mark">{favorites.includes(recipe.id) ? <IoMdBookmark size={24} /> : ""}</div>}            
        </div>
    );
}
