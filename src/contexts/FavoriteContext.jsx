import { useState, createContext, useContext, useEffect } from "react";

const favoriteContext = createContext();


export function FavoriteProvider({ children }) {

    const [favorites, setFavorites] = useState(() => {
        // On verifie si une liste est sauvegardée dans le localStorage
        // On la charge si oui ou on attribue un tableau vide [] si non
        const favoriteSaved = localStorage.getItem("favoriteListId");
        return favoriteSaved ? JSON.parse(favoriteSaved) : [];
    });


    useEffect(() => {
        // a chaque changement, on met a jour le localStorage
        localStorage.setItem("favoriteListId", JSON.stringify(favorites));
    }, [favorites]);

    function addToFavorite(id) {
        // Ajoute l'id de la recette au tableau des favoris
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
            console.log("Favoris après ajout :", [...favorites, id]);
        }
    }

    function removeFromFavorite(id) {
        // retire l'id de la recette du tableau des favoris
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(favoriteId => favoriteId !== id));
        }
    }

    function toggleFavorite(id) {
        // verifie si l'id est dans le tableau et le retire si oui, l'ajout si non
        if (favorites.includes(id)) {
            removeFromFavorite(id);
        } else {
            addToFavorite(id);
        }
    }

    return (
        <favoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </favoriteContext.Provider>
    );
}

export function useFavorite() {
    return useContext(favoriteContext);
}
