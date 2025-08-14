import { Link } from "react-router";
import arrowSvg from '../../assets/svg-icons/arrow-left.svg';

export default function BackBtn({ to }) {

    return (

        <div className='back-btn'>
            <Link to={to}>
                <img src={arrowSvg} alt="Retour" />
            </Link>
        </div>

    )

}
