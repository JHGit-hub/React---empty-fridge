import CTAButton from "../buttons/cta";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../NavBar/Navbar";
import Formulaire from "../formulaire/Formulaire";


export default function Home() {




    return (
        <div className="page">
            <div>
                <h3>Ajouter Ingrédients</h3>
            </div>
            <Formulaire />
            <ul className="filter-list">
                {list.map(task =>
                    <li key={task.id} className="liste">
                        <input onChange={() => boxChecked(task.id)} type="checkbox" value="" />
                        <p style={{ textDecoration: task.closed ? "line-through" : "none" }}>
                            {task.content}
                        </p>
                        <button onClick={() => deleteTask(task.id)}>
                            <RiDeleteBin5Line size={15} />
                        </button>
                    </li>
                )}
            </ul>

            <Navbar />
        </div>
    );
}
