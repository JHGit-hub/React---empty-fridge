import BackBtn from "../buttons/Backbtn";
import clockSvg from "../../assets/svg-icons/clock.svg";
import userSvg from "../../assets/svg-icons/user.svg";
import cookingSvg from "../../assets/svg-icons/cooking.svg";

import { useList } from "../../contexts/ListContext";
import IngredientsList from "../ingredients/ingredients";
import StepList from "../Steps/steps";


export default function Recipe({ id }) {

    const { list } = useList();
    const recipe = list.find(item => item.id === Number(id));

    return (

        <div>
            <BackBtn to="/list-recipe" />
            <div>
                <div className="recipe-header">
                    <div className="recipe-header-img">
                        <img src={recipe.image} alt={`illustration de la recette ${recipe.nom}`} />
                    </div>
                    <div className="recipe-header-text">
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
                        <div>add to favorite</div>
                    </div>
                </div>
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
    );
}
