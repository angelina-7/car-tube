import { html } from "../../node_modules/lit-html/lit-html.js";

import { register } from "../services/authService.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form id="register-form" @submit=${onSubmit}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`;

export default function renderRegister(ctx) {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPass');

        if (username && password && repeatPass) {
            if (password == repeatPass) {
                register(username, password)
                    .then(() => {
                        ctx.page.redirect('/cars');
                    });
            }
        } else {
            //todo display alert
        }
    };

    ctx.render(registerTemplate(onSubmitHandler));
}