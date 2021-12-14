import { html } from "../../node_modules/lit-html/lit-html.js";

import { login } from "../services/authService.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form id="login-form" action="#" method="post" @submit=${onSubmit}>
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;

export default function renderLogin(ctx) {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');

        if (username && password) {
            login(username, password)
                .then(() => {
                    ctx.page.redirect('/cars');
                });
        } else {
            //todo display alert
        }

    };

    ctx.render(loginTemplate(onSubmitHandler));
}