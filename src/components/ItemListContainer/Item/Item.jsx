import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <Card className="custom-item" style={{ width: "18rem" }}>
      <Card.Img className="card-img-custom" variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="custom-title">{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.sortDescription}</Card.Text>
        <Link to={"/detail/" + product.id} className="custom-button">
          Ver detalles
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Item;
