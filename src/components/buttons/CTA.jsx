import { Link } from "react-router";

export default function CTAButton({ label, to }) {

    return (
        <Link to={to} className="cta-button">
            {label}
        </Link>
    );
}
