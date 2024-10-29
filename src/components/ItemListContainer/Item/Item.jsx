import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Item.css'

const Item = ({ product }) => {
  return (
    // <div className="item">
    //   <img src={product.image} className="img-item" alt="" width={100} />
    //   <p className="text-item">{product.name}</p>
    //   <p className="text-item">${product.price}</p>

    //   <Link to={ "/detail/" + product.id }>Ver detalles</Link>
    // </div>
    <Card className="custom-item" style={{ width: "18rem" }}>
      <Card.Img className="card-img-custom" variant="top" src={product.image}  />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>
        {product.sortDecription}
        </Card.Text>
        <Link to={ "/detail/" + product.id }>Ver detalles</Link>
      </Card.Body>
    </Card>
  );
};
export default Item;
