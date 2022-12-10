const checkinFav = (fav,product) => {
    return fav.find((c) => c.id === product.id);
}
 
export default checkinFav;