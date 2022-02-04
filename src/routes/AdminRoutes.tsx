import { Switch, Route } from "react-router-dom";

import ManageOrderDetail from "../pages/ManageOrderDetails";
import ManageOrders from "../pages/ManageOrders";
import ManageProducts from "../pages/ManageProducts";
import ManageUsers from "../pages/ManageUsers";
import PageNotFound from "../pages/PageNotFound";

interface Props {}

const AdminRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/admin/manage-products">
        <ManageProducts/>
      </Route>
      <Route path="/admin/manage-orders/:id">
        <ManageOrderDetail />
      </Route>
      <Route path="/admin/manage-orders">
        <ManageOrders />
      </Route>
      <Route path="/admin/manage-users">
        <ManageUsers />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;
