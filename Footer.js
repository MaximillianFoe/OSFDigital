let FooterDate = new Date();
let FullYear = FooterDate.getFullYear();
document.getElementById("CurrentYear").innerHTML = FullYear;

if (!localStorage.bannerClosed) {
    $('.CookieAlert').css('display', 'inherit');
} else {
    $('.CookieAlert').css('display', 'none');
}

$('.CookieAlert button').click(function() {
    $('.CookieAlert').css('display', 'none');
    localStorage.bannerClosed = 'true';
});

$('.banner-accept').click(function() {
    $('.CookieAlert').css('display', 'none');
    localStorage.bannerClosed = 'true';
});

if (navigator.userAgent.match(/Opera|OPR\//)) {
    $('.CookieAlert').css('display', 'inherit');
}
