import axios from 'axios';

export function getUser(postId) {
    return axios.get('https://reacttest-c6610.firebaseio.com/user.json');
}

export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}