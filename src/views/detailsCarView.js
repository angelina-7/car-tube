import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

import * as carService from '../services/carService.js';
import {getUser} from '../services/authService.js';

const detailsCarTemplate = ({ imageUrl, brand, model, year, price, description, _id }, isOwner) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${brand}</li>
            <li><span>Model:</span>${model}</li>
            <li><span>Year:</span>${year}</li>
            <li><span>Price:</span>${price}$</li>
        </ul>

        <p class="description-para">${description}</p>

        ${isOwner 
        ? html`
            <div class="listings-buttons">
                <a href="/cars/${_id}/edit" class="button-list">Edit</a>
                <a href="/cars/${_id}/delete" class="button-list">Delete</a>
            </div>`
        : nothing}
        
    </div>
</section>
`;

export default function renderDetailsCar(ctx) {
    carService.getOne(ctx.params.id)
        .then((car) => {
            let isOwner = false;
            let user = getUser();

            if(car._ownerId == user?._id) isOwner = true;

            ctx.render(detailsCarTemplate(car, isOwner));
        });
    
}