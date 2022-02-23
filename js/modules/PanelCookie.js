import { Cookies } from "./Cookies.js";

export class PanelCookies extends Cookies{

    constructor() {
        
        super();
        
        this.infoCookie = 'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki. Dodatkowo, korzystanie z naszej witryny oznacza akceptację przez Państwa';

        this.textClose = '<a href = "#" title="Akceptuj i zamknij"> Zamknij </a> '

        // this.textColor = 'red';

        this.panel = document.querySelector('.cookies');

        if(!this.getCookie('Accept')){
            this.showPanel();
        }
        else {
            this.hidePanel();
        }

        this.setPanelProperties();
    }

    setPanelProperties() {
        const text = document.querySelector('.cookies__text');
        const close = document.querySelector('.cookies__close');
        text.innerHTML = this.infoCookie;
        // text.style.color = this.textColor;
        close.innerHTML = this.textClose;

    }

    showPanel() {
        this.panel.style.display = 'block';
    }

    hidePanel() {
        this.panel.style.display = 'none';
    }

    setCookie() {

        super.setCookie({
            name: 'Accept',
            value: 'yesss',
            days: 360
        })
    }
}

// const panel = new PanelCookies;