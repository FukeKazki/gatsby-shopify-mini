import * as React from "react";
import { useContext, useState } from "react";
import { StoreContext } from "../../../context/store";
import { Presentation } from "./presentation";

/**
 * 商品詳細ページ
 * 機能
 * - 商品情報の表示
 * - 商品をカートに追加
 */

export type ProductProps = {
  data: GatsbyTypes.ProductPageQuery;
};

export const Product = ({ data }: ProductProps) => {
  const storeContext = useContext(StoreContext);
  const [quantity, setQuantity] = useState(0);
  const [variantId, setVariantId] = useState<string | null>(null);

  const handleBuy = () => {
    if (!variantId) return;

    storeContext.addVariantToCart(variantId, quantity);
    alert("カートに追加しました!");
  };

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) return;
    setQuantity((prevState) => prevState - 1);
  };

  const handleSelectVariant = (variantId: string | null) => {
    setVariantId(variantId);
  };

  return (
    <Presentation
      data={data}
      handleBuy={handleBuy}
      quantity={quantity}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleSelectVariant={handleSelectVariant}
    />
  );
};
