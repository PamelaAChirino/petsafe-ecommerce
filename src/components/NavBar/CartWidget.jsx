import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";
import cartIcon from '../../assets/carrito-de-compras.png'; 
import "./navbar.css";

function CartWidget({ count }) {
  const { totalQuantity } = useContext(cartContext);

  const total = totalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={cartIcon} alt="Carrito" width="24" height="24" />
        <span style={{ marginLeft: '8px' }}>{total >= 1 && total}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
