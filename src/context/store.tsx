import * as React from "react"
import {client} from "../infra/shopify";
import {ReactNode, useEffect, useState} from "react";
import {Cart} from "shopify-buy";

const initialCartValue = {
    checkoutUrl: "",
    id: "",
    lineItemCount: 0,
    lineItems: [],
    subtotalPrice: "",
    completedAt: "",
    webUrl: "",
}

type ContextType = {
    loading: boolean;
    cart: Cart;
    addVariantToCart: (variantId: string, quantity: number) => void;
    removeLineItem: (lineItemID: string) => void;
    updateLineItem: (lineItemID: string, quantity: number) => void;
}

export const StoreContext = React.createContext<ContextType>({
    loading: false,
    cart: initialCartValue,
    addVariantToCart: () => {},
    removeLineItem: () => {},
    updateLineItem: () => {},
});

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const StoreProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<Cart>(initialCartValue)

    const [loading, setLoading] = React.useState(false)

    const setCheckoutItem = (checkout: Cart) => {
        if (isBrowser) {
            localStorage.setItem(localStorageKey, checkout.id as string)
        }

        setCart(checkout)
    }

    useEffect(() => {
        const initializeCheckout = async () => {
            const existingCheckoutID = isBrowser
                ? localStorage.getItem(localStorageKey)
                : null

            if (existingCheckoutID && existingCheckoutID !== `null`) {
                try {
                    const existingCheckout = await client.checkout.fetch(
                        existingCheckoutID
                    )
                    if (!existingCheckout.completedAt) {
                        setCheckoutItem(existingCheckout)
                        return
                    }
                } catch (e) {
                    localStorage.setItem(localStorageKey, "null")
                }
            }

            const newCheckout = await client.checkout.create()
            setCheckoutItem(newCheckout)
        }

        initializeCheckout()
    }, [])

    const addVariantToCart = (variantId: string, quantity: number) => {
        setLoading(true)

        const lineItemsToUpdate = [
            {
                variantId,
                quantity,
            },
        ]

        return client.checkout
            .addLineItems(cart.id, lineItemsToUpdate)
            .then((res) => {
                setCart(res)
                setLoading(false)
            })
    }

    const removeLineItem = (lineItemID: string) => {
        setLoading(true)

        return client.checkout
            .removeLineItems(cart.id, [lineItemID])
            .then((res) => {
                setCart(res)
                setLoading(false)
            })
    }

    const updateLineItem = (lineItemID: string, quantity: number) => {
        setLoading(true)

        const lineItemsToUpdate = [
            {id: lineItemID, quantity},
        ]

        return client.checkout
            .updateLineItems(cart.id, lineItemsToUpdate)
            .then((res) => {
                setCart(res)
                setLoading(false)
            })
    }

    return (
        <StoreContext.Provider
            value={{
                addVariantToCart,
                removeLineItem,
                updateLineItem,
                cart,
                loading,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
