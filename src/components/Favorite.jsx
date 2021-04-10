import {useContext, useEffect, useState} from "react";
import {FavoriteContext} from "../context/Favorite/FavoriteContext";

export default () => {


    const {state, getFavoriteCats, setFetching} = useContext(FavoriteContext);
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        // if (state.fetching) {
        //     getFavoriteCats(currentPage)
        //     setCurrentPage(prevState => prevState + 1)
        // }
    }, [state.fetching])


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [state.fetching])

    const scrollHandler = e => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }


    return (
        <div className="container">
            <div className="gallery">
                {state.favoriteCats.map(item =>
                    <div className="gallery__item" >
                        <div className='hover-block'></div>
                        <img className="gallery__img" key={item.id} src={item.url} alt=""/>
                        <button className="gallery__btn active"></button>
                    </div>
                )}
            </div>
        </div>
    );
};