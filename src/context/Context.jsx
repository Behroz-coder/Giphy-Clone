import React, { createContext, useContext,useEffect,useState } from 'react';
import {GiphyFetch } from '@giphy/js-fetch-api'


export const gifContext = createContext()

const GifProvider = ({ children }) => {

    const [gifs, setGifs] = useState([])
    const [filter, setFilter] = useState("gifs")
    const [favorites, setFavorites] = useState([])
    const addToFavorites = (id)=>{
        if (favorites.includes(id)) {

            const updateFavorites = favorites.filter((itemId) => itemId !== id)
            localStorage.setItem('favoriteGIFs', JSON.stringify(updateFavorites))
            
            
        } else {
            const updateFavorites = [...favorites]
            updateFavorites.push(id)
            localStorage.setItem('favoriteGIFs', JSON.stringify(updateFavorites))
        }
    }
    useEffect(() => {
        const favorit = JSON.parse(localStorage.getItem('favoriteGIFs')) || []
        setFavorites(favorit)
    }, [])
    

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)
    
    return (
        <gifContext.Provider value={{gf,gifs,setGifs,filter,setFilter,favorites,addToFavorites }}>
            {children}
        </gifContext.Provider>
    )
}
export const GifState = () => {
    return useContext(gifContext)
}
export default GifProvider
