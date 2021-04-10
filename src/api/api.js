import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': '4a465c2b-d82f-4e32-ab3e-13974327cf8a',
    },
});

// 4a465c2b-d82f-4e32-ab3e-13974327cf8a

    export const catsAPI = {
        getCats(currentPage) {
            return instance
                .get(`images/search?limit=15&page=${currentPage}`)
        },
        getFavoriteCats(currentPage) {
            return instance
                .get(`favourites/?limit=100&page=72`)
        },
        setFavoriteCat(id) {
            return instance
                .post(`favourites` , {"image_id": id})
        },
        deleteCat(id) {
            return instance
                .delete(`favourites/${id}`)
        },

    };


