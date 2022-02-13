import * as React from "react"
import {graphql, PageProps} from "gatsby";
import {useContext} from "react";
import {StoreContext} from "../../context/store";

/**
 * 商品詳細ページ
 * 機能
 * - 商品情報の表示
 * - 商品をカートに追加
 */

const ProductPage = ({ data }: PageProps<GatsbyTypes.ProductPageQuery>) => {
    const storeContext = useContext(StoreContext);

    const handleBuy = () => {
        const variantId = data?.product?.variants?.[0]?.storefrontId!;
        const quantity = 1;

        storeContext.addVariantToCart(variantId, quantity);
        alert("カートに追加しました!")
    }
    return (
        <>
            <p>商品詳細ページ</p>
            <p>商品名 {data.product?.title}</p>
            <button onClick={handleBuy}>購入する</button>
        </>
    )
}

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
                gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
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
`


export default ProductPage