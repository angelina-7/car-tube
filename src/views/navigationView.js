import { html } from "../../node_modules/lit-html/lit-html.js";

const guestNavTemplate = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

const authNavTemplate = () => html`
<div id="profile">
    <a>Welcome username</a>
    <a href="#">My Listings</a>
    <a href="/cars/create">Create Listing</a>
    <a href="/logout">Logout</a>
</div>
`;

const navTemplate = () => html`
<nav>
    <a class="active" href="/">Home</a>
    <a href="/cars">All Listings</a>
    <a href="#">By Year</a>
    ${guestNavTemplate()}

</nav>
`;

export function renderNavigation(ctx) {
    //todo add guest and private nav

    return navTemplate();
}