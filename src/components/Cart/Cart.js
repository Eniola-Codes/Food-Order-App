import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal.js";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckingOut, setisCheckingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onOrderHandler = () => {
    setisCheckingOut(true);
  };

  const onPassDataHandler = (userData) => {
    setIsSubmitting(true);
    setDidSubmit(false);
    fetch("https://meals-food-d5e28-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ userData, ordereditem: cartCtx.items }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const actions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={onOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && (
        <CheckOut onCancel={props.onClose} onPassData={onPassDataHandler} />
      )}
      {!isCheckingOut && actions}
    </>
  );

  const isSubmittingContent = <p>Your order is Submitting</p>;

  const didSubmittingContent = (
    <>
      <p>Your order has been submitted</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={props.onClose}>
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmittingContent}
      {!isSubmitting && !didSubmit && modalContent}
    </Modal>
  );
};

export default Cart;
