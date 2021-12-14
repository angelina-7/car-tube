import * as api from './api.js';
import * as request from './requester.js';

export function getAll() {
    return request.get(`${api.CARS}?sortBy=_createdOn%20desc`);
}

export function getOne(id) {
    return request.get(`${api.CARS}/${id}`);
}

export function create(carData) {
    return request.post(api.CARS, carData);
}