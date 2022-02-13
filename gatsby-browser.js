import * as React from "react"
import {StoreProvider} from "./src/context/store";

export const wrapRootElement = ({ element }) => (
    <StoreProvider>{element}</StoreProvider>
)