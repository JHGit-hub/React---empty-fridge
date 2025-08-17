import { useFavorite } from "../../contexts/FavoriteContext";
import BackBtn from "../buttons/Backbtn";
import Navbar from "../NavBar/Navbar";
import { Link } from "react-router";
import Card from "../cards/Card";
import { useList } from "../../contexts/ListContext";


export default function Favorite() {

    const { favorites} = useFavorite();
    const { list } = useList();

    return (
        <div>
            <div className="page">
                <div className="list-page">
                    <div className="header-list">
                        <BackBtn to="/home" />
                        <h3>Mes recettes Favorites</h3>
                    </div>
                    <div className="list-card">
                        {favorites.map((id) => {
                            const favRecipe = list.find((recipe) => recipe.id === id);
                            return (
                                <Link to={`/recipe/${favRecipe.id}`} key={favRecipe.id}>
                                    <Card recipe={favRecipe} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    );
}