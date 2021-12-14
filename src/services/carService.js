import * as api from './api.js';
import * as request from './requester.js';

export function getAll() {
    return request.get(`${api.CARS}?sortBy=_createdOn%20desc`);
}