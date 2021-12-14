import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from "../services/carService.js";

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

const carsTemplate = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        ${cars.map(x => carTemplate(x))}

        <!-- Display if there are no records -->
        <p class="no-cars">No cars in database.</p>
    </div>
</section>
`;

export default function renderCars(ctx) {
    carService.getAll()
        .then((cars) => {
            ctx.render(carsTemplate(cars));
        });

}