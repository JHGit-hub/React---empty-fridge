import { useIngredient } from "../../contexts/IngredientContext";

export default function Formulaire() {

    const { currentIngredientName, setCurrentIngredientName, addIngredientToList } = useIngredient();

    function handleChange(event) {
        setCurrentIngredientName(event.target.value);
    }

    return (
        // Composant qui affiche le formulaire de filtre
        <div className="filter-form">
            <input 
                type="text" 
                name="ingredient" 
                value={currentIngredientName === null ? "" : currentIngredientName} 
                onChange={handleChange} 
            />
            <button onClick={addIngredientToList} className="cta-btn">Ajouter Ingrédient</button>
        </div>
    );
}
