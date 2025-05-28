import cartItems from '../constants/cartItems';
import { CartItems } from '../types/cart';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useShallow } from 'zustand/shallow';

interface CartActions {
    increase : (id : string) => void;
    decrease : (id : string) => void;
    removeItem : (id : string) => void;
    clearCart : () => void;
    calculateTotals : () => void;
}

interface CartState {
    cartItems : CartItems;
    amount : number;
    total : number;

    actions : CartActions;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const useCartStore = create<CartState>()(immer((set, _) => ({
    cartItems : cartItems,
    amount : 0,
    total : 0,

    actions : {
        increase : (id : string) => {
            set((state) : void => {
                const cartItem = state.cartItems.find((item) : boolean => item.id === id);

                if(cartItem) {
                    cartItem.amount += 1;
                }
            })
        },

        decrease : (id : string) => {
            set((state) : void => {
                const cartItem = state.cartItems.find((item) : boolean => item.id === id);

                if(cartItem && cartItem.amount > 0) {
                    cartItem.amount -= 1;
                }
            })
        },

        removeItem : (id : string) => {
            set((state) : void => {
                state.cartItems = state.cartItems.filter((item) : boolean => item.id !== id);
            })
        },

        clearCart : () => {
            set((state) : void => {
                state.cartItems = [];
            })
        },

        calculateTotals : () => {
            set((state) : void => {
                let amount = 0;
                let total = 0;

                state.cartItems.forEach((item) : void => {
                    amount += item.amount;
                    total += item.amount * item.price;
                });

                state.amount = amount;
                state.total = total;
            })
        },
    }
})));


export const useCartInfo = () => useCartStore(useShallow((state) => ({
    cartItems : state.cartItems,
    amount : state.amount,
    total : state.total,
})))

export const useCartActions = () => useCartStore((state) => state.actions)