function readMore() {
    let dots = document.getElementById("readDots");
    let moreText = document.getElementById("readMore");
    let spanText = document.getElementById("readMoreSpan");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        spanText.innerHTML = "Read More!";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        spanText.innerHTML = "Read Less!";
        moreText.style.display = "inline";
    }
}
