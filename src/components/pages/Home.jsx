import CTAButton from "../buttons/CTA.jsx";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../NavBar/Navbar";
import Formulaire from "../formulaire/Formulaire";
import { useIngredient } from "../../contexts/IngredientContext.jsx";


export default function Home() {

    const { ingredients, removeIngredient } = useIngredient();

    return (
        // page qui affiche un formulaire de recherche des recettes par ingrédients 
        <div className="page">
            <div>
                <h3>Ajouter Ingrédients</h3>
            </div>
            <Formulaire />
            <div className="filter-list">
                <h2>Dans mon Frigo j'ai :</h2>
                <ul>
                    {ingredients.map(ingredient =>
                        <li key={ingredient.id} className="ingredients-filter">
                            <p>{ingredient.name}</p>
                            <button onClick={() => removeIngredient(ingredient.id)}>
                                <RxCross2 size={25} />
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <CTAButton to="/list-recipe" label={"GO"} />
            <Navbar />
        </div>
    );
}
