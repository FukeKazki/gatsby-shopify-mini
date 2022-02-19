import { css } from "@emotion/react";

export const quantityButton = css`
  display: flex;
  align-items: center;
`;

export const decrementButton = css`
  border-radius: 4px 0 0 4px;
  height: 32px;
  width: 32px;
  font-size: 1.6rem;
  display: grid;
  place-items: center;
`;

export const incrementButton = css`
  border-radius: 0 4px 4px 0;
  height: 32px;
  width: 32px;
  font-size: 1.6rem;
  display: grid;
  place-items: center;
  margin-left: 1px;
`;

export const quantity = css`
  height: 32px;
  width: 32px;
  font-size: 1.6rem;
  display: grid;
  place-items: center;
`;