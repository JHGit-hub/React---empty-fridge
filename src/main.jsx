import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListProvider from './contexts/ListContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ListProvider>
            <App />
        </ListProvider>
    </StrictMode>,
)
