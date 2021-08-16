let FooterDate = new Date();
let FullYear = FooterDate.getFullYear();
document.getElementById("CurrentYear").innerHTML = FullYear;

$(document).ready(function() {
    let cookie = false;
    let cookieContent = $('.CookieWarning');

    checkCookie();

    if (cookie === true) {
        cookieContent.hide();
    }

    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function checkCookie() {
        let check = getCookie("acookie");
        if (check !== "") {
            return cookie = true;
        } else {
            return cookie = false;
        }

    }

    $('.CookieAccept').click(function () {
        setCookie("acookie", "accepted", 365);
        cookieContent.hide(500);
    });
});
