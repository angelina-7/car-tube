import page from '../node_modules/page/page.mjs';

import { navigationMid } from './middlewares/navigationMid.js';
import { renderMid } from './middlewares/renderMid.js';
import { authMid } from './middlewares/authMid.js';
import renderHome from './views/homeView.js';
import renderLogin from './views/loginView.js'
import renderRegister from './views/registerView.js'
import doLogout from './views/logout.js'

page(authMid);
page(navigationMid);
page(renderMid);

page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', doLogout);
page('/cars', () => console.log('cars'));


page.start();