import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'API-KEY': '4a465c2b-d82f-4e32-ab3e-13974327cf8a',
    },
});

export const catsAPI = {
    getCats(currentPage) {
        return instance
            .get(`images/search?limit=15&page=${currentPage}`)
    }
};
