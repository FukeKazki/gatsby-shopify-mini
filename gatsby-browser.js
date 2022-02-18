import * as React from "react"
import {StoreProvider} from "./src/context/store";
// import "./src/styles/ress.css";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
    <StoreProvider>{element}</StoreProvider>
)