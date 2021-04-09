// import * as axios from 'axios';
//
// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         'API-KEY': '317040e3-44d9-43d1-b382-0593c64f3a1a',
//     },
// });
//
// export const usersAPI = {
//     getUsers(currentPage, pageSize) {
//         return instance
//             .get(`users?page=${currentPage}&count=${pageSize}`)
//     },
//     follow(id) {
//         return instance
//             .post(`follow/${id}`)
//     },
//     unfollow(id) {
//         return instance
//             .delete(`follow/${id}`)
//     },
// };
