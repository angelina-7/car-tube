import { html } from "../../node_modules/lit-html/lit-html.js";

import * as carService from '../services/carService.js';

const editCarTemplate = (onSubmit, { brand, model, description, year, imageUrl, price }) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;

export default function renderEditCar(ctx) {
    let carId = ctx.params.id;

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let carData = Object.fromEntries(new FormData(e.currentTarget));

        if (!Object.values(carData).some(x => !x)) {
            carData.year = Number(carData.year);
            carData.price = Number(carData.price);

            carService.update(carData, carId)
                .then(() => {
                    ctx.page.redirect(`/cars/${carId}/details`);
                });
        } else {
            alert('You must fill all the fields.')
        }

    };

    carService.getOne(carId)
        .then((car) => {

            ctx.render(editCarTemplate(onSubmitHandler, car));
        });

}