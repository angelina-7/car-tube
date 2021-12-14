import { logout } from "../services/authService.js";

export default function doLogout(ctx) {
    logout()
        .finally(() => {
            localStorage.removeItem('user');
            ctx.page.redirect('/');
        });
}