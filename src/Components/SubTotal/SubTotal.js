import React from "react";
import "../SubTotal/SubTotal.css";
import CurrencyFormat from "react-currency-format"; //when the currency greater than thousend too add the comma  eg 10,194.00
import { useStateValue } from "../StateProvider/StateProvider";

// import { unstable_HistoryRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); //to calculate all prices
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>{" "}
            {/*calculate the values  */}
            <small className='="subtotal-gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //to calculate total basket price
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
