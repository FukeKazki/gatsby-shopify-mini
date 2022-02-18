import * as React from "react";
import { useAllProduct } from "../../../hooks/useAllProduct";
import { useContext } from "react";
import { StoreContext } from "../../../context/store";
import { Header } from "../../shared/Header";
import { Link } from "gatsby";

export const Index = () => {
  const products = useAllProduct();
  const storeContext = useContext(StoreContext);
  console.log(storeContext);
  console.log("カートの中身", storeContext.cart.lineItems);

  return (
    <>
      <Header/>
      <ul>
        {products.map(({ node }) => (
          <li key={node.title}>
            <Link to={`/products/${node.handle}/`}>
              <p>{node.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
