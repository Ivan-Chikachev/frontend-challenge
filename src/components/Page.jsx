import {useContext, useEffect, useState} from "react";
import {PageContext} from "../context/Page/PageContext";

export default () => {

    const {state, getCats, setFetching} = useContext(PageContext);
    const [currentPage, setCurrentPage] = useState(1)

    console.log(state.fetching)

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
    }, [])

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
                        <img className="gallery__img" src={item.url} alt=""/>
                    </div>
                )}
            </div>
        </div>
    );
};