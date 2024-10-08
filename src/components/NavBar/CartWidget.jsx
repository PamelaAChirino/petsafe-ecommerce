import React from 'react';
import cartIcon from '../../assets/carrito-de-compras.png'; 

function CartWidget({ count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={cartIcon} alt="Carrito" width="24" height="24" />
      <span style={{ marginLeft: '8px' }}>{count}</span>
    </div>
  );
}

export default CartWidget;