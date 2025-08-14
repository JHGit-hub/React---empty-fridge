import { useState, createContext, useContext } from "react";

const IngredientContext = createContext();

export function IngredientProvider({ children }) {

    const [ingredients, setIngredients] = useState([]);
    const [currentIngredientName, setCurrentIngredientName] = useState("");

    // Ajoute un ingrédient à la liste
    function addIngredientToList() {
        if (currentIngredientName != "") {
            // je creer un objet ingredient
            let ingredientToAdd = {
                id: Date.now(),
                name: currentIngredientName,
            }
            // je recrée un tableau a partir de l'etat exitant auquel je rajoute l'ingredient que je viens de creer
            setIngredients([...ingredients, ingredientToAdd])
            setCurrentIngredientName("")
        }
    }

    // Supprime un ingrédient de la liste
    function removeIngredient(id) {
        setIngredients(ingredients.filter(elt => { return elt.id !== id }))
    }

    return (
        <IngredientContext.Provider value={{ ingredients, setIngredients, currentIngredientName, setCurrentIngredientName, addIngredientToList, removeIngredient }}>
            {children}
        </IngredientContext.Provider>
    );
}

export function useIngredient() {
    return useContext(IngredientContext);
}
