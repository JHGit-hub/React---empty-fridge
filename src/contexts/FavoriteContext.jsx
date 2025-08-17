/* 

faire le context favorite pour créer un tableau des favrois selon leur id

extraire et affiche la liste des favoris
const recettesFavorites = list.filter(recipe => favorites.includes(recipe.id));

créer peti logo bookmark sur les recettes favorite selon condition "fais parti des favoris"

mettre compteur favorite.length sur le logo favorite de la navbar

faire un cta add favorite qui va onClick activer function toggleFavorite()
switch entre addToFavorite et removeToFavorite selon condition si id recette est dans le tableau des id favoris

*/
import { useState, createContext, useContext } from "react";

    const favoriteContext = createContext();


export function FavoriteProvider({ children }) {
    
    const [favorites, setFavorites] = useState([]);

    function addToFavorite(id) {
        // Ajoute l'id de la recette au tableau des favoris
        if(!favorites.includes(id)){
            setFavorites([...favorites, id]);
            console.log("Favoris après ajout :", [...favorites, id]);
        }
    }

    function removeFromFavorite(id) {
        // retire l'id de la recette du tableau des favoris
        if(favorites.includes(id)){
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
