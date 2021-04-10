import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': '03488ee6-4bf2-4798-9586-f45dfffe60ba',
    },
});


export const catsAPI = {
        getCats(currentPage) {
            return instance
                .get(`images/search?limit=15&page=${currentPage}`)
        },
        getFavoriteCats(currentPage) {
            return instance
                .get(`favourites/?limit=15&page=${currentPage}`)
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


