"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface IContext {
  children: React.ReactNode;
}

interface ICartItem {
  id: number,
  qty: number
}

interface ICartContext {
  cartItem: ICartItem[],
  CartTotalQty: number
  getItemQty: (id: number) => number,
  handelIncreas: (id: number) => void
  handelDeCrease: (id: number) => void
  handelRemove: (id: number) => void
}

const CartContext = createContext({} as ICartContext);


export const useCartContext = () => {
  return useContext(CartContext)
}


export function ContextProvider({ children }: IContext) {
  const [cartItem, setCartItem] = useState<ICartItem[]>([])

  const CartTotalQty = cartItem.reduce((totalQty, item) => {
    return totalQty + item.qty
  }, 0)

  const getItemQty = (id: number) => {
    return cartItem.find(item => item.id === id)?.qty || 0
  }

  const handelIncreas = (id: number) => {
    setCartItem(currentItem=> {
      let isNotProductExist = currentItem.find(item => item.id == id) == null
      
      if(isNotProductExist) {
        return [...currentItem, { id:id, qty:1 }]
      } 

      else {
        return currentItem.map(item=> {
          if(item.id == id) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }
          else {
            return item
          }
        })
      }
    })
  }

  const handelDeCrease = (id: number) => {
    setCartItem(currentItems => {
      let isLastOne = currentItems.find(item => item.id == id)?.qty == 1

      if(isLastOne) {
        return currentItems.filter(item=> item.id != id)
      }
      else {
        return (
          currentItems.map(item=> {
            if(item.id == id) {
              return {
                ...item, qty: item.qty - 1
              }
            }
            else {
              return item
            }
          })
        )
      }
    })
  }

  const handelRemove = (id: number) => {
    setCartItem(currentItems => {
      return currentItems.filter((item) => item.id != id)
    })
  }

  return ( 
    <CartContext.Provider value={{cartItem, handelIncreas, getItemQty, handelRemove, CartTotalQty, handelDeCrease}}>
      {children}
    </CartContext.Provider>
  );
}
