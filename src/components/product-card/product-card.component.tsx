import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

interface ProductCard {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export const ProductCard = ({ id, name, imageUrl, price }: any) => {
  const { addItemToCart } = useContext(CartContext);
  const productAddedToCart = { id, name, imageUrl, price };
  const addItemtoOurCart = () => {
    addItemToCart(productAddedToCart);
  };
  return (
    <div className="product-card">
      <img src={imageUrl} />
      <div className="product-card-content">
        <span>{name}</span>
        <span>₹{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemtoOurCart}>
        Add to Cart
      </Button>
    </div>
  );
};
