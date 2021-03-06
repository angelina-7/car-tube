import page from '../node_modules/page/page.mjs';

import { navigationMid } from './middlewares/navigationMid.js';
import { renderMid } from './middlewares/renderMid.js';
import { authMid } from './middlewares/authMid.js';
import renderHome from './views/homeView.js';
import renderLogin from './views/loginView.js'
import renderRegister from './views/registerView.js'
import doLogout from './views/logout.js'
import renderCars from './views/carsView.js';
import renderCreateCar from './views/createCarView.js';
import renderDetailsCar from './views/detailsCarView.js';
import renderEditCar from './views/editCarView.js';
import deleteCar from './views/deleteCar.js';
import renderMyCars from './views/myCarsView.js';

page(authMid);
page(navigationMid);
page(renderMid);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', doLogout);
page('/cars', renderCars);
page('/cars/create', renderCreateCar);
page('/cars/:id/details', renderDetailsCar);
page('/cars/:id/edit', renderEditCar);
page('/cars/:id/delete', deleteCar);
page('/my/cars', renderMyCars);


page.start();