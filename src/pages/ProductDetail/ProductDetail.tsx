import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductItem from "../../components/products/ProductItem";
import { products, Product } from "../../data/products";
import PageNotFound from "../PageNotFound";

import styles from "./ProductDetail.module.scss";

interface Props {}

const ProductDetail: React.FC<Props> = () => {
  const params = useParams() as { productId: string };
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    const prod = products.find((product) => product.id === params.productId);
    if (prod) setProduct(prod);
    else setProduct(undefined);
  }, [params]);
  console.log(params);
  console.log(product);

  if (!product) return <PageNotFound />;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.img}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={styles.detail}>
          <div className={styles.subSection}>
            <div className={styles.header}>{product.title}</div>
            <div className={styles.description}>{product.description}</div>
          </div>
          <hr />
          <div className={styles.price}>
            Price: <span>{product.price.toFixed(2)}$</span>
          </div>
          <hr />
          <div className={styles.availability}>
            Availability: <span>In stock</span>
          </div>
          <hr />
          <div className={styles.quantity}>
            <div className={styles.item}>-</div>
            <div className={styles.item}>1</div>
            <div className={styles.item}>+</div>
          </div>
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
