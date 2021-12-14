import * as api from './api.js'
import * as request from './requester.js'

export function login(username, password) {
    return request.post(api.LOGIN, { username, password })
        .then((user) => {
            saveUser(user);
            return user;
        });
}

export function register(username, password) {
    return request.post(api.REGISTER, { username, password })
        .then((user) => {
            saveUser(user);
            return user;
        })
}

export function logout() {
    return request.get(api.LOGOUT);
}

function saveUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUser() {
    try {
        let user = localStorage.getItem('user');

        if (user) return JSON.parse(user);
    } catch (error) {
        return undefined;
    }


}