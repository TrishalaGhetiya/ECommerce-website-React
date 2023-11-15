import { Button } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td>
        <div>
          <Button variant="outline-dark" onClick={props.onRemove}>-</Button>
          <span>{" "}{props.quantity}{" "}</span>
          <Button variant="outline-dark" onClick={props.onAdd}>+</Button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
