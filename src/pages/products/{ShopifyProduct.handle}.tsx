import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Product } from "../../components/template/Product";

const ProductPage = ({ data }: PageProps<GatsbyTypes.ProductPageQuery>) => {
  return (
    <>
      <Product data={data} />
    </>
  );
};

export const pageQuery = graphql`
  query ProductPage($id: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(
          layout: CONSTRAINED
          width: 640
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
  }
`;

export default ProductPage;
