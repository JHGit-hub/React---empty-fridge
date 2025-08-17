import BackBtn from "../buttons/Backbtn";
import clockSvg from "../../assets/svg-icons/clock.svg";
import userSvg from "../../assets/svg-icons/user.svg";
import cookingSvg from "../../assets/svg-icons/cooking.svg";
import { MdBookmarkBorder } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";

import { useList } from "../../contexts/ListContext";
import IngredientsList from "../ingredients/ingredients";
import StepList from "../Steps/steps";
import { useParams } from "react-router";
import Navbar from "../NavBar/Navbar";
import { useFavorite } from "../../contexts/FavoriteContext";  


export default function Recipe() {

    const { id } = useParams();
    const { list } = useList();
    const { favorites, toggleFavorite } = useFavorite();
    const recipe = list.find(item => item.id === Number(id));

    return (
        <div className="page">
            <div className="recipe-page">
                <div className="header-recipe">
                    <BackBtn to="/list-recipe" />
                    <h3>{recipe.nom}</h3>
                </div>
                <div className="recipe-presentation">
                    <div className="presentation-img">
                        <img src={recipe.image} alt={`illustration de la recette ${recipe.nom}`} />
                    </div>
                    <div className="presentation-text">
                        <div className="presentation">
                            <ul>
                                <li>
                                    <img src={clockSvg} alt="Temps de préparation" />
                                    {recipe.temps_preparation}
                                </li>
                                <li>
                                    <img src={userSvg} alt="Nombre de personnes" />
                                    {recipe.nombre_personnes}
                                </li>
                                <li>
                                    <img src={cookingSvg} alt="Temps de cuisson" />
                                    {recipe.temps_cuisson}
                                </li>
                            </ul>
                        </div>
                        <div className="add-favorite" onClick={() => toggleFavorite(recipe.id)}>
                            {favorites.includes(recipe.id) ? <IoMdBookmark /> : <MdBookmarkBorder />}
                            {favorites.includes(recipe.id) ? <span> Retirer des favoris</span> : <span> Ajouter aux favoris</span>}
                        </div>
                    </div>
                </div>
                <div className="recipe-detail">
                    <div className="recipe-ingredients">
                        <h4>Ingrédients</h4>
                        <IngredientsList ingredients={recipe.ingredients} />
                    </div>
                    <div className="recipe-steps">
                        <h4>Étapes</h4>
                        <StepList steps={recipe.etapes} />
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
