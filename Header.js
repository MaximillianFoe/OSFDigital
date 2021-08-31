function showPassword() {
    let x = document.getElementById("passwordForm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let FavoriteItemCount = localStorage.getItem('FavoriteItemCount');
let CartItemCount = localStorage.getItem('CartItemCount');

if (FavoriteItemCount == null) {
    FavoriteItemCount = 0;
}

if (CartItemCount == null) {
    CartItemCount = 0;
}

function AddToFavorite() {
    localStorage.setItem('FavoriteItemCount', FavoriteItemCount++);
}
function AddToCart() {
    localStorage.setItem('CartItemCount', CartItemCount++);
}

