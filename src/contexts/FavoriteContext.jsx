import { useState, createContext, useContext, useEffect } from "react";
// Hook pour utiliser le contexte des favoris

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
        // la dépendance est la liste des favoris
        localStorage.setItem("favoriteListId", JSON.stringify(favorites));
    }, [favorites]);

    function addToFavorite(id) {
        // Ajouter l'id de la recette au tableau des favoris
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
            console.log("Favoris après ajout :", [...favorites, id]); // console.log pour test
        }
    }

    function removeFromFavorite(id) {
        // retirer l'id de la recette du tableau des favoris
        if (favorites.includes(id)) {
            // On reconstruit un tableau des id des recettes des favoris en excluant celui qui à l'id passé en paramètre
            setFavorites(favorites.filter(favoriteId => favoriteId !== id));
        }
    }

    function toggleFavorite(id) {
        // On verifie si l'id est dans le tableau des favoris et on le retire si oui, on l'ajout si non
        if (favorites.includes(id)) {
            removeFromFavorite(id);
        } else {
            addToFavorite(id);
        }
    }

    return (
        // Fournit le contexte des favoris aux composants enfants
        <favoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </favoriteContext.Provider>
    );
}

// Création d'un Hook personnalisé pour la gestion des favoris
export function useFavorite() {
    return useContext(favoriteContext);
}
