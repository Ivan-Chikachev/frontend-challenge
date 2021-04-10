import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': '4a465c2b-d82f-4e32-ab3e-13974327cf8a',
    },
});

    export const catsAPI = {
        getCats(currentPage) {
            return instance
                .get(`images/search?limit=15&page=${currentPage}`)
        },
        getFavoriteCats() {
            return instance
                .get(`favourites`)
        },
        setFavoriteCat() {
            return instance
                .post(`favourites` , {"image_id": "3ar"})
        },

    };


