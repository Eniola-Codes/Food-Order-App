import { useRef, useState } from "react";
import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid & postalIsValid & cityIsValid;

    if (!formIsValid) {
      return;
    }

        props.onPassData({
            name : enteredName,
            street : enteredStreet,
            postal : enteredPostal,
            city : enteredCity
        });


  };

  const nameClassControl = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetClassControl = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const postalClassControl = `${classes.control} ${
    formValidity.postal ? "" : classes.invalid
  }`;
  const cityClassControl = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassControl}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Please input a valid name.</p>}
      </div>
      <div className={streetClassControl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Please input a valid street.</p>}
      </div>
      <div className={postalClassControl}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formValidity.postal && <p>Please input 5 characters only.</p>}
      </div>
      <div className={cityClassControl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Please input a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
