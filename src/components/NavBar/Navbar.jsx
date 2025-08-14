import { NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { LuBook } from "react-icons/lu";

export default function Navbar() {

    return (

        <div className="navbar">
            <NavLink to="/home"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <GoHome size={26} />
            </NavLink>
            <NavLink to="/list-recipe"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <IoIosList size={26} />
            </NavLink>
            <NavLink to="/favorite"
                style={({ isActive }) => ({
                    color: isActive ? "var(--secondary-color)" : "#ffffff",
                })}>
                <LuBook size={26} />
            </NavLink>
        </div>

    )
}

