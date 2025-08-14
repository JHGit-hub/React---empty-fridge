import Card from '../cards/Card';
import { useList } from '../../contexts/ListContext';
import Navbar from '../NavBar/Navbar';
import BackBtn from '../buttons/Backbtn';
import { NavLink, useParams } from 'react-router';

export default function List() {

    const { list } = useList();
    const { id } = useParams();

    return (

        <div className="page">
            <div className="list-page">
                <div className="header-list">
                    <BackBtn to="/home" />
                    <h3>Suggestions de Recette</h3>
                </div>
                <div className="list-card">
                    {list.map((recipe) => (
                        <Card key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
            <Navbar />
        </div>

    );
}
