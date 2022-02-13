import * as React from "react";
import { useAllProduct } from "../hooks/useAllProduct";
import { Link } from "gatsby";
import { useContext } from "react";
import { StoreContext } from "../context/store";

const IndexPage = () => {
  const products = useAllProduct();
  const storeContext = useContext(StoreContext);
  console.log(storeContext);
  console.log("カートの中身", storeContext.cart.lineItems);
  return (
    <div>
      <p>hello</p>
      <ul>
        {products.map(({ node }) => (
          <li key={node.title}>
            <Link to={`/products/${node.handle}/`}>
              <p>{node.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
