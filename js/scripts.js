'use strict';

import { PanelCookies } from "./modules/PanelCookie.js";

const panel = new PanelCookies;

const closeLink = document.querySelector('.cookies a');

closeLink.addEventListener('click', (e) => {

    e.preventDefault;

    panel.setCookie();
    panel.hidePanel();

})