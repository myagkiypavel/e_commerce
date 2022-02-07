import ProductItem from "../../components/products/ProductItem";
import { products } from "../../data/products";

import styles from './Index.module.scss';

interface Props{}

const Index: React.FC<Props> = () => {
  return <div className={styles.products}>
    {products.map(product => {
      const {id} = product;
      return (
        <ProductItem key={id} product={product}/>
      )
    })}
  </div>;
};

export default Index;
