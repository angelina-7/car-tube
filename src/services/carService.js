import * as api from './api.js';
import * as request from './requester.js';

export function getAll() {
    return request.get(`${api.CARS}?sortBy=_createdOn%20desc`);
}

export function getOne(id) {
    return request.get(`${api.CARS}/${id}`);
}

export function getMy(ownerId) {
    return request.get(`${api.CARS}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
}

export function create(carData) {
    return request.post(api.CARS, carData);
}

export function update(carData, id) {
    return request.put(`${api.CARS}/${id}`, carData);
}

export function del(id) {
    return request.del(`${api.CARS}/${id}`);
}