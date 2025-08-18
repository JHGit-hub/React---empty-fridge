import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import List from './components/pages/List'
import Home from './components/pages/Home'
import SplashScreen from './components/pages/SplashScreen'
import Recipe from './components/pages/Recipe'
import Favorite from './components/pages/Favorite'


function App() {


    return (
        // Utilisation de BrowserRouter pour gérer les routes de l'application
        <BrowserRouter>
            <Routes>
                <Route path="/list-recipe" element={<List />} />
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes >
        </BrowserRouter>

    )
}

export default App
