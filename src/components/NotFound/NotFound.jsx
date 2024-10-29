import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;