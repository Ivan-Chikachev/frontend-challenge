import {useContext, useEffect, useState} from "react";
import {FavoriteContext} from "../context/Favorite/FavoriteContext";

export default () => {

    const {state, getFavoriteCats, setFetching, deleteCat} = useContext(FavoriteContext);
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if (state.fetching) {
            getFavoriteCats(currentPage)
            setCurrentPage(prevState => prevState + 1)
        }
    }, [state.fetching])
    // Делаем запрос картинок с текущей страницей, если fetching: true
    // Затем добавляем текущей странице +1


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [state.fetching])
    // Добавляем и удаляем слушателя документу при изменении fetching


    const scrollHandler = e => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
            < 100 && state.favoriteCats.length < state.totalCount) {
            setFetching(true)
        }
    }
    // Функция для определения уровня скролла.
    // При setFetching: true - происходит подгрузка данных
    // Имеет условие чтобы не погружались данные, если их больше нет

    return (
        <div className="container">
            <div className="gallery">
                {state.favoriteCats.map(item =>
                    <div className="gallery__item" key={item.id}>
                        <div className='hover-block'></div>
                        <img className="gallery__img" src={item.image.url} alt=""/>
                        <button onClick={() => deleteCat(item.id)} className="gallery__btn active"
                                title="Убрать котика"></button>
                    </div>
                )}
            </div>
        </div>
    );
};