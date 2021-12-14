import { getUser } from '../services/authService.js'

export function authMid(ctx, next) {
    let user = getUser();
    
    if (user) {
        ctx.user = user;
    } 

    next();
}