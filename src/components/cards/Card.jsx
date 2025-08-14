export default function Card({ recipe }) {


    return (
        <div className="card">
            <div className="card-img">
                <img src={recipe.image} alt={`illustration de la recette ${recipe.nom}`} />
            </div>
            <div className="card-text">
                <h4>{recipe.nom}</h4>
            </div>
        </div>
    );
}
