
import {API_BASE_URL} from './config';

export default function getCheese(cheese) {

    return fetch(`${API_BASE_URL}/cheeses`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.map(cheese => cheese));
}

// export const fetchCheeseList = () => (dispatch, getState) => {
//     return fetch(`${API_BASE_URL}`, {
//         method: 'GET'
//     })
//         .then(res => res.json())
//         .then(({data}) => dispatch(fetchCheesesSuccess(data)))
//         .catch(err => {
//             dispatch(fetchCheesesError(err));
//         });
// };

// export function search(cheese) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(getCheese(cheese)), 500);
//   });
// }