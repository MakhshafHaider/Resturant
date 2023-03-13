export const addToCart = (pizza, quantity) => (dispatch, getState) => {
    let cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      quantity: quantity,
      prices: pizza.prices,
      price: quantity * pizza.prices
    };

    if(cartItem.quantity < 1){
      dispatch({type: "DELETE_FROM_CART", payload: pizza})
    }  
    else{
      dispatch({type: "ADD_TO_CART", payload: cartItem})

    }
    console.log(cartItem);
  
    // dispatch({ type: "ADD_TO_CART", payload: cartItem });
  
    const cartItems = getState().cartReducer.cartItems;
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage with current cart items
  };
  

  export const deleteFromCart= pizza => (dispatch) =>{

    dispatch({type: "DELETE_FROM_CART", payload:pizza })
  }