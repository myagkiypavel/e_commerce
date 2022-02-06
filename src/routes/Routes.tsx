import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetail";
import PageNotFound from "../pages/PageNotFound";
import BuyRoutes from "./BuyRoutes";
import OrderRoutes from "./OrderRoutes";
import AdminRoutes from "./AdminRoutes";

interface Props {}

const RootRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/buy">
        <BuyRoutes />
      </Route>
      <Route path="/orders">
        <OrderRoutes />
      </Route>
      <Route path="/admin">
        <AdminRoutes />
      </Route>
      <Route path="/products/:id">
        <ProductDetails />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/">
        <Index />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default RootRoutes;
