import * as React from "react";

import * as styles from "./styles";
import { ComponentPropsWithRef } from "react";

interface QuantityButtonProps extends ComponentPropsWithRef<"div"> {
  quantity: number
  handleDecrement: () => void,
  handleIncrement: () => void,
}

export const QuantityButton = ({ quantity,  handleDecrement, handleIncrement, ...props }: QuantityButtonProps) => (
  <div css={styles.quantityButton} {...props}>
    <button onClick={handleDecrement} css={styles.decrementButton}>-</button>
    <div css={styles.quantity}>{quantity}</div>
    <button onClick={handleIncrement} css={styles.incrementButton}>+</button>
  </div>
);
