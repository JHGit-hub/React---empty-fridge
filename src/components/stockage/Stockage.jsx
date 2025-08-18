import { useEffect, useState } from "react";

export default function Stockage() {

    const [favoriteId, setFavoriteId] = useState("");

    // On enregistre la valeur dans le localStorage
    useEffect(() => {
        localStorage.setItem("favoriteListId", JSON.stringify(favoriteId));
    }, [favoriteId]);

}