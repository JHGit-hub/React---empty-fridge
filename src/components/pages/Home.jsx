import CTAButton from "../buttons/cta";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../NavBar/Navbar";
import Formulaire from "../formulaire/Formulaire";
import { useIngredient } from "../../contexts/IngredientContext.jsx";


export default function Home() {

    const { ingredients, removeIngredient } = useIngredient();

    return (
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
                                <RiDeleteBin5Line size={15} />
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <CTAButton to="/list-recipe" label={"GO"}/>
            <Navbar />
        </div>
    );
}
