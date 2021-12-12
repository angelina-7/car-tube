import page from '../node_modules/page/page.mjs';

import { navigationMid } from './middlewares/navigationMid';
import homePage from './views/homeView.js';

page(navigationMid);
page('/', homePage);
page('/login', );
page('/register', );
page('/', );


page.start();