const addProductToCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === payload.id
    );
  
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...payload, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
  
    return { ...state, cart: updatedCart, total: state.total + payload.offPrice };
  };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProductToCart(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
