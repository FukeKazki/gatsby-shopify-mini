import * as React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/store";

// 商品の増減・削除
// 購入フォームへの遷移
const CartPage = () => {
  const storeContext = useContext(StoreContext);

  const handleRemove = (lineItemID: string) => {
    storeContext.removeLineItem(lineItemID);
    alert("カートから削除しました");
  };

  const doIncrement = (lineItemID: string, quantity: number) => {
    storeContext.updateLineItem(lineItemID, quantity + 1);
  };

  const doDecrement = (lineItemID: string, quantity: number) => {
    storeContext.updateLineItem(lineItemID, quantity - 1);
  };

  return (
    <>
      <p>カートページ</p>
      <p>カートの中身</p>
      <ul>
        {storeContext.cart.lineItems.map((lineItem) => (
          <li key={lineItem.id}>
            <p>商品名 {lineItem.title}</p>
            <p>種類 {lineItem.variant.id}</p>
            <p>個数 {lineItem.quantity}</p>
            <button
              onClick={() =>
                doIncrement(lineItem.id.toString(), lineItem.quantity)
              }
            >
              増やす
            </button>
            <button
              onClick={() =>
                doDecrement(lineItem.id.toString(), lineItem.quantity)
              }
            >
              減らす
            </button>
            <button onClick={() => handleRemove(lineItem.id.toString())}>
              削除
            </button>
          </li>
        ))}
      </ul>

      <a href={storeContext.cart.webUrl}>購入ページへ</a>
    </>
  );
};

export default CartPage;
