import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { QuantityButton } from "../../shared/QuantityButton";

type PresentationProps = {
  data: GatsbyTypes.ProductPageQuery;
  handleBuy: () => void;
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleSelectVariant: (storefrontId: string | null) => void;
};

export const Presentation = ({
  data: { product },
  handleBuy,
  quantity,
  handleIncrement,
  handleDecrement,
  handleSelectVariant
}: PresentationProps) => {
  return (
    <>
      {product?.images?.map((image) => {
        if (!image?.gatsbyImageData) return;
        return (
          <GatsbyImage
            key={image?.id}
            alt="商品画像"
            image={image?.gatsbyImageData}
          />
        );
      })}
      <p>商品詳細ページ</p>
      <p>商品名 {product?.title}</p>
      <p>種類</p>
      <ul>
        {product?.variants?.map((variant) => (
          <li key={variant?.storefrontId}>
            <button
              onClick={() => handleSelectVariant(variant?.storefrontId ?? null)}
            >
              {variant?.title}
            </button>
          </li>
        ))}
      </ul>

      <QuantityButton quantity={quantity} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>

      <button onClick={handleBuy}>カートに入れる</button>
    </>
  );
};
