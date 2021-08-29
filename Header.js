function showPassword() {
    var x = document.getElementById("passwordForm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
