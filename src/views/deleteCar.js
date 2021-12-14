import * as carService from '../services/carService.js';

export default function deleteCar(ctx) {
    let carId = ctx.params.id;

    carService.del(carId)
        .then((car) => {
            ctx.page.redirect('/cars');
        });

}