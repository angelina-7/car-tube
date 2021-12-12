import { render } from "../../node_modules/lit-html/lit-html.js";

import { renderNavigation } from "../views/navigationView.js";

const navElement = document.querySelector('header .navigation');

export function navigationMid(ctx, next) {
    render(renderNavigation(ctx), navElement);

    next();
}