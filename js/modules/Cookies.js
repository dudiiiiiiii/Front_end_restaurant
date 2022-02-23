
export class Cookies {

    constructor() {
        this.checkCookieEnabled();
    }

    checkCookieEnabled() {
        //console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled){
            alert('Masz wyłączoną obsługę cookies');
            return;
        }
    }

    setCookie(options){

        const option = {

            name: options.name || 'test',
            value: options.value || 'wartosc_testowa',
            days: options.days ,
            path: options.path,
            domain: options.domain,
            secure: options.secure

        }

        const cookieName = encodeURIComponent(option.name);
        
        const cookieVal = encodeURIComponent(option.value);

        const cookieSettingsTab = []

        cookieSettingsTab.push(`${cookieName} = ${cookieVal}`);

        if(typeof option.days === 'number') {

            const date = new Date();

            // w milisec od 1970 roku
            date.setTime(date.getTime() + (option.days * 24 * 3600  * 1000));
            
            cookieSettingsTab.push(`expires = ${date.toGMTString()}`)


        }

        if(option.domain) {
            cookieSettingsTab.push(`domain = ${option.domain}`)
        }

        if(option.path) {
            cookieSettingsTab.push(`path = ${option.path}`)
        }
        
        if(option.secure) {
            cookieSettingsTab.push(`secure = ${option.secure}`)
        }

        document.cookie = cookieSettingsTab.join(";");
    }

    getCookie(name) {

        if(document.cookie != '') {

            const cookies = document.cookie.split(/; */);

            for(let i=0; i< cookies.length; i++){

                const cookieName = cookies[i].split('=')[0];
                const cookieVal = cookies[i].split('=')[1];
                
                if(cookieName === decodeURIComponent(name)){
                    return cookieVal;
                }
            }

        }
    }

    removeCookie(name) {

        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        document.cookie = `${name} = ; expires = ${date.toGMTString()}`;

    }


}


const cookie = new Cookies;

// CIASTKO
// cookie.setCookie({
//     name: 'Accept',
//     value: 'yes',
//     days: 30
// })

// CIASTKO SESYJNE
// cookie.setCookie({
//     name: 'sesyjne',
//     value: 'test',
// })

// USUWANIE
//cookie.removeCookie('Accept');


