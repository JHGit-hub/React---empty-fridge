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
    const ingredientNames = ingredients.map(ingredient => ingredient.name.toLowerCase());


    // Filtrer la liste des recettes pour ne garder que celles qui contiennent les ingredients
    let recipList = []; // liste des recettes a affichées

    if (ingredientNames.length === 0) {
        // si recipList est vide, on affiche toutes les recettes par defaut
        recipList = list;
    } else {
        // on compare les noms des ingredients avec les ingredient de la liste
        recipList = list.filter(recipe => // .filter va filtrer la liste des recettes ou la condition est validée
            recipe.ingredients.find( // .find  (ici la condition) va chercher si au moins un ingredient de la recette est dans la liste des ingredients du frigo
                ingredient => ingredientNames.includes(ingredient.nom.toLowerCase())
            )
        )
    }

    return (

        <div className="page">
            <div className="list-page">
                <div className="header-list">
                    <BackBtn to="/home" />
                    <h3>Suggestions de Recette</h3>
                </div>
                <div className="list-card">
                    {recipList.length === 0 ? (
                        <p>Aucune recette avec les ingrédients de ton frigo</p>
                    ) : (
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
