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

