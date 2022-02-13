import { graphql, useStaticQuery } from "gatsby";

export const useAllProduct = () => {
  const { allShopifyProduct } =
    useStaticQuery<GatsbyTypes.UseAllProductQuery>(graphql`
      query UseAllProduct {
        allShopifyProduct {
          edges {
            node {
              title
              handle
            }
          }
        }
      }
    `);

  return allShopifyProduct.edges;
};
