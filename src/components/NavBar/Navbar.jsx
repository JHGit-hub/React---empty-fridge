import { NavLink } from "react-router";
import houseSvg from '../../assets/svg-icons/house.svg';
import listBulletSvg from '../../assets/svg-icons/list-bullets.svg';
import bookSvg from '../../assets/svg-icons/book.svg';

export default function Navbar() {

    return ( 
    
        <div className="navbar">
            <NavLink to="/home">
                <img src={houseSvg} alt='Home' />
            </NavLink>
            <NavLink to="/list-recipe">
                <img src={listBulletSvg} alt='List' />
            </NavLink>
            <NavLink to="/favorite">
                <img src={bookSvg} alt='Favorite' />
            </NavLink>
        </div>

    )
}

