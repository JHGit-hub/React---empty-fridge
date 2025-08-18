import { useFavorite } from "../../contexts/FavoriteContext";
import { IoMdBookmark } from "react-icons/io";


export default function Card({ recipe }) {

    const { favorites } = useFavorite();

    return (
        // Composant qui affiche la card de la recette
        <div className="card">
            <div className="card-img">
                <img src={recipe.image} alt={`illustration de la recette ${recipe.nom}`} />
            </div>
            <div className="card-text">
                <h4>{recipe.nom}</h4>
            </div>
            {/* On verifier le chemin de la page, on affiche le bookmark que si on est sur la page des recettes et si la recette est dans les favoris */}
            {location.pathname === "/list-recipe" && <div className="favorite-mark">{favorites.includes(recipe.id) ? <IoMdBookmark size={24} /> : ""}</div>}            
        </div>
    );
}
