import React from "react";
import { NavLink } from "react-router-dom";

import styles from './NavBar.module.scss';

const NavBar = () => {
  return <header className="head">
    <div className={styles.section}>
      <NavLink to='/' className={styles.list_link}>Home</NavLink>
      <NavLink to='/products' className={styles.list_link}>Products</NavLink>
      <NavLink to='/buy/my-cart' className={styles.list_link}>Cart</NavLink>
      <NavLink to='/buy/select-address' className={styles.list_link}>Select Address</NavLink>
      <NavLink to='/buy/checkout' className={styles.list_link}>Checkout</NavLink>
      <NavLink to='/orders/my-orders' className={styles.list_link}>Orders</NavLink>
      <NavLink to='/admin/manage-products' className={styles.list_link}>Manage Products</NavLink>
      <NavLink to='/admin/manage-orders' className={styles.list_link}>Manage Order</NavLink>
      <NavLink to='/admin/manage-users' className={styles.list_link}>Manage Users</NavLink>
    </div>
  </header>;
};
export default NavBar;
