import Card from '../cards/Card';
import { useList } from '../../contexts/ListContext';
import Navbar from '../NavBar/Navbar';
import BackBtn from '../buttons/Backbtn';
import { Link } from 'react-router';
import { useIngredient } from '../../contexts/IngredientContext.jsx';

export default function List() {

    const { list } = useList();
    const { ingredients } = useIngredient();

    // A partir de la liste des ingredients, on va extraire que les noms d'ingredients
    // on utilise .toLowerCase() pour tout mettre en minuscule
    const ingredientToFilter = ingredients.map(ingredient => ingredient.name.toLowerCase());


    // Filtrer la liste des recettes pour ne garder que celles qui contiennent les ingredients
    let recipList = []; // liste des recettes a affichées

    if (ingredientToFilter.length === 0) {
        // si la liste des ingredients est vide, on affiche toutes les recettes par defaut
        recipList = list;
    } else {
        // on compare les noms des ingredients avec les ingredient de la liste

        // .filter va parcourir la liste des recettes et ne garder que celles qui ont au moins 1 ingredients de la liste de filtrage
        recipList = list.filter(recipe =>

            // on va vérifier si dans la liste des ingrédients de la recette (recipe.ingredients),
            // il existe au moins un ingrédient dont le nom inclut le nom du frigo (name, issu de la liste ingredientToFilter).
            ingredientToFilter.some(name =>
                recipe.ingredients.some(ingredient => ingredient.nom.toLowerCase().includes(name)))
        );
    }

    return (
        // page qui affiche la liste des recettes filtrées ou toutes par defaut
        <div className="page">
            <div className="list-page">
                <div className="header-list">
                    <BackBtn to="/home" />
                    <h3>Suggestions de Recette</h3>
                </div>
                <div className="list-card">
                    {/* si aucun ingredient ne correspond a une recette, donc recipList est vide, alors on affiche un message */}
                    {recipList.length === 0 ? (
                        <p>Aucune recette avec les ingrédients de ton frigo</p>
                    ) : (
                        // On boucle sur la liste des recettes et on y intégre leur id dans un lien vers la recette
                        recipList.map((recipe) => (
                            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                                <Card recipe={recipe} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
            <Navbar />
        </div>

    );
}
