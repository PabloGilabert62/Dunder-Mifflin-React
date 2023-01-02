import './Favorites.css';
import React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const Favorites = () => {

    const {favorites} = useContext(FavoritesContext)
    
    return(
        <div>
            <h1 className='title-fav animate__animated animate__backInUp'>Favorite items</h1>
            {favorites.map(favorite => {
                return(
                    <div className='cards-details-flex-fav'>
                        <div className='cards-details-fav'>
                            <img src={favorite.src} alt={favorite.alt}/>
                            <p className='font-title-fav'>{favorite.title}</p>
                            <div className='line-fav'></div>
                            <p className='font-title-fav'>Price: ${favorite.price}</p>
                        </div>
                    </div>
                )
            })}
            <span className="footer-">
                <img className="footer-logo" src='/images/DunderMifflinLogo.png' alt="Dunder Mifflin Paper Company Logo"/>
                <span className="text-footer">Dunder Mifflin Company Since 2008</span>
            </span>
        </div>
    )
}

export default Favorites