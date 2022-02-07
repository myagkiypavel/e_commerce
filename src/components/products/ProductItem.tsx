import React from "react";
import { Product } from "../../data/products";
import styles from "./ProductItem.module.scss";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const { title, description, price, imageUrl } = product;
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={imageUrl} alt="clother" />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className={styles.price}>{price}$</div>
    </div>
  );
};

export default ProductItem;
