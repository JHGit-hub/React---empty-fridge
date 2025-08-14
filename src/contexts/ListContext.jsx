import { useEffect, useState, createContext, useContext } from "react";

const ListContext = createContext();

export default function ListProvider({ children }) {

    const [ list, setList ] = useState([]);

    useEffect(() => {
        fetch('src/assets/recettes_cuisine.json')
            .then(response => response.json())
            .then(data => setList(data))
            .catch(error => console.error('Erreur lors du chargement du fichier JSON', error));
    }, []);


    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    );
};

export function useList() {
    return useContext(ListContext);
}
