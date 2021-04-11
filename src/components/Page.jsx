import {useContext, useEffect, useState} from "react";
import {PageContext} from "../context/Page/PageContext";
import {FavoriteContext} from "../context/Favorite/FavoriteContext";

export default () => {

    const {state, getCats, setFetching} = useContext(PageContext);
    const {setFavoriteCat} = useContext(FavoriteContext);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (state.fetching) {
            getCats(currentPage)
            setCurrentPage(prevState => prevState + 1)
        }
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
                {state.cats.map(item =>
                    <div className="gallery__item" key={item.id}>
                        <div className="hover-block"></div>
                        <img className="gallery__img"  src={item.url} alt=""/>
                        <button className="gallery__btn" onClick={()=>setFavoriteCat(item.id)}></button>
                    </div>
                )}
            </div>
        </div>
    );
};