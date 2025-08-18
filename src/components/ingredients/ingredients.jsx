export default function IngredientsList({ ingredients }) {

    return (
        // Composant qui affiche la liste des ingrédients   
        <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <span>{ingredient.illustration}</span>
                    <span>{ingredient.quantite} {ingredient.unite} </span>
                    <span>{ingredient.nom}</span>
                </li>
            ))}
        </ul>
    );

}
