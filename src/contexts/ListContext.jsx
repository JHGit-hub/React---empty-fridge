import { useEffect, useState, createContext, useContext } from "react";
// Hook pour utiliser le contexte de la liste des recettes

const ListContext = createContext();

export default function ListProvider({ children }) {

    const [ list, setList ] = useState([]);

    // On charge la liste des recettes depuis le fichier JSON lors du montage du composant
    useEffect(() => {
        fetch('src/assets/recettes_cuisine.json')
            .then(response => response.json())
            .then(data => setList(data)) // On attribue la liste des recettes à la variable list
            .catch(error => console.error('Erreur lors du chargement du fichier JSON', error)); // On affiche un message d'erreur si une erreur se produit
    }, []);


    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    );
};

// Création d'un Hook personnalisé pour la gestion de la liste des recettes
export function useList() {
    return useContext(ListContext);
}
