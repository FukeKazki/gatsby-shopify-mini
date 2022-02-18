import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

type PresentationProps = {
  title: string;
  images: GatsbyTypes.ShopifyProductImage[];
  variants: GatsbyTypes.ShopifyProductVariant[];
  handleBuy: () => void;
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleSelectVariant: (storefrontId: string | null) => void;
};

export const Presentation = ({
  title,
  images,
  variants,
  handleBuy,
  quantity,
  handleIncrement,
  handleDecrement,
  handleSelectVariant
}: PresentationProps) => {
  return (
    <>
      {images.map((image) => (
        <GatsbyImage
          key={image.id}
          alt={image.altText ?? "商品画像"}
          image={image.gatsbyImageData}
        />
      ))}
      <p>商品詳細ページ</p>
      <p>商品名 {title}</p>
      <p>種類</p>
      <ul>
        {variants.map((variant) => (
          <li key={variant.storefrontId}>
            <button
              onClick={() => handleSelectVariant(variant?.storefrontId ?? null)}
            >
              {variant.title}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleIncrement}>+</button>
      <span>{quantity}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleBuy}>カートに入れる</button>
    </>
  );
};
