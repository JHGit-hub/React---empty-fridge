import { NavLink } from "react-router";
import arrowSvg from '../../assets/svg-icons/arrow-left.svg';

export default function BackBtn(to) {

    return (

        <div className='back-btn'>
            <NavLink to={to}>
                <img src={arrowSvg} alt="Retour" />
            </NavLink>
        </div>

    )

}
