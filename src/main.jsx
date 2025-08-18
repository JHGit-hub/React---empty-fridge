import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListProvider from './contexts/ListContext.jsx'
import { IngredientProvider } from './contexts/IngredientContext.jsx'
import { FavoriteProvider } from './contexts/FavoriteContext.jsx'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <IngredientProvider>
            <ListProvider>
                <FavoriteProvider>
                    <App />
                </FavoriteProvider>
            </ListProvider>
        </IngredientProvider>
    </StrictMode>,
)
