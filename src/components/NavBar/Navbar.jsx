import { NavLink } from "react-router";

export default function Navbar() {

    return ( 
    
        <div className="navbar">
            <NavLink to="/home">
                <img src='assets/svg-icons/house.svg' alt='Home' />
            </NavLink>
            <NavLink to="/list">
                <img src='assets/svg-icons/list-bullets.svg' alt='List' />
            </NavLink>
            <NavLink to="/favorite">
                <img src='assets/svg-icons/book.svg' alt='Favorite' />
            </NavLink>
        </div>

    )
}

