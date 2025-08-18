import { useState, createContext, useContext } from "react";
// Hook pour utiliser le contexte des ingrédients

const IngredientContext = createContext();

export function IngredientProvider({ children }) {

    const [ingredients, setIngredients] = useState([]);
    const [currentIngredientName, setCurrentIngredientName] = useState("");

    // Ajouter un ingrédient à la liste de filtrage
    function addIngredientToList() {
        // On verifie si le champ du formulaire n'est pas vide
        if (currentIngredientName != "") {

            // On creer un objet ingredient
            let ingredientToAdd = {
                id: Date.now(), // id calculé a partir de la date actuelle (pour etre unique)
                name: currentIngredientName, // nom de l'ingrédient
            }

            // On recrée un tableau a partir de l'etat exitant auquel on rajoute l'ingredient que l'on vient de creer
            setIngredients([...ingredients, ingredientToAdd])

            // On vide le champ du formulaire
            setCurrentIngredientName("")
        }
    }

    // Supprimer un ingrédient de la liste
    function removeIngredient(id) {
        // On recrée un tableau d'ingredients en excluant l'ingrédient à supprimer dont l'id est passé en paramètre
        setIngredients(ingredients.filter(elt => { return elt.id !== id }))
    }

    return (
        <IngredientContext.Provider value={{ ingredients, setIngredients, currentIngredientName, setCurrentIngredientName, addIngredientToList, removeIngredient }}>
            {children}
        </IngredientContext.Provider>
    );
}

// Création d'un Hook personnalisé pour la gestion des ingrédients
export function useIngredient() {
    return useContext(IngredientContext);
}
