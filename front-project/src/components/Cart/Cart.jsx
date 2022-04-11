import "./Cart.scss";

//Boostrap
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  AddOneProductToCart,
  SustractOneProductToCart,
} from "../../redux/actions/cartActions";
import PayPlatform from "./ComponentsCart/PayPlatform/PayPlatform";
import NoCart from "./ComponentsCart/NoCart.jsx/NoCart";
import { FormattedMessage as T } from "react-intl";

const Cart = (props) => {


  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(props.cart));
  }, [props.cart]);

  const price = props.cart.reduce((curNumber, item) => {
    return curNumber + item.price * item.amount;
  }, 0);

  const newPrice = price.toFixed(2);

  const amount = props.cart.map((item) => {
    return item.amount;
  });

  let suma = 0;
  amount.forEach((element) => {
    suma += element;
  });

  const [goToPay, setGoToPay] = useState(false);

  return (
    <>
    <div className='bgcart'></div>
      <div className="container__all">
        {!props.cart.length && (
          <div>
            <NoCart />
          </div>
        )}
        {props.cart.length > 0 && (
          <div className="items">
            {props.cart.map((item, index) => (
              <div key={index} className="container">
                <div className="images">
                  <img src={item.image} alt="" />
                </div>
                <div className="product">
                  {/* <p>{item.categorie}</p> */}
                  <h1>{item.title}</h1>
                  <h2>{item.price} €</h2>
                  {/* <p className="desc">{item.description}</p> */}
                  <div className="buttons">
                    <button
                      onClick={() => {
                        props.dispatch(SustractOneProductToCart(item));
                      }}
                    >
                      -
                    </button>
                    <p>{item.amount}</p>
                    <button
                      onClick={() => {
                        props.dispatch(AddOneProductToCart(item));
                      }}
                    >
                      +
                    </button>
                  </div>
                  {item.amount === item.stock ? (
                    <h5 className="lastUnits">
                      Has llegado al máximo de stock
                    </h5>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {props.cart.length > 0 && (
          <div className="tramitar">
            <h3>
              <T id="Cart.summary" />
            </h3>
            <h4>
              {suma} <T id="Cart.product" />
            </h4>
            <h2>Total: {newPrice} €</h2>
            <button
              onClick={() => {
                setGoToPay(true);
              }}
            >
              {" "}
              <T id="Cart.checkout" />{" "}
            </button>
          </div>
        )}
      </div>
      {goToPay && (
        <PayPlatform
          price={newPrice}
          cart={props.cart}
          setGoToPay={setGoToPay}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
