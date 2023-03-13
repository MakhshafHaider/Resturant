import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/CartActions";

export default function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
   let subtotal = cartItems.reduce((x, item) => x+item.price, 0)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {

            return (
              <div className="flex-container" style={{display: "flex"}}>
                <div className="text-left m-1 w-100" style={{textAlign:"left"}}>
                  <h1>{item.name}</h1>
                  <h1>
                    Price: { item.quantity }*{item.prices} = {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity: </h1>
                  <i className="fa fa-plus" aria-hidden="true" onClick={() => (dispatch(addToCart(item, item.quantity+1)))}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true" onClick={() => (dispatch(addToCart(item, item.quantity-1)))}></i>
                  <hr />
                </div>

                <div className="m-1">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="m-2">
                <i className="fa fa-trash mt-1" aria-hidden="true"  onClick={() => (dispatch(deleteFromCart(item)))}></i>
  
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4">
            <h2 style={{fontSize:"40px"}}>
                SubTotal: {subtotal} /-
            </h2>
        </div>
      </div>
    </div>
  );
}
