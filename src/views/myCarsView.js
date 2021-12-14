import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from "../services/carService.js";
import {getUser} from "../services/authService.js";

const carTemplate = ({ imageUrl, brand, model, year, price, _id }) => html`
<div class="listing">
    <div class="preview">
        <img src="${imageUrl}">
    </div>
    <h2>${brand} ${model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${year}</h3>
            <h3>Price: ${price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/cars/${_id}/details" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

const myCarsTemplate = (cars = []) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        ${cars.length == 0 
        ? html`<p class="no-cars">You haven't listed any cars yet.</p>`
        : cars.map(x => carTemplate(x))}
       
    </div>
</section>
`;

export default function renderMyCars(ctx) {
    let user = getUser();

    carService.getMy(user._id)
        .then((cars) => {
            ctx.render(myCarsTemplate(cars));
        });

}