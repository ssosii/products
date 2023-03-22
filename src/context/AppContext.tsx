import { ReactElement, createContext, useState } from "react";

import { Basket, BasketItem, BasketList } from "../types";

const AppContext = createContext({} as Basket);

const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const [basketValue, setBasketValue] = useState(0);
  const [basketItemNumber, setBasketItemNumber] = useState(0);
  const [basktetItems, setBasketItem] = useState<BasketItem[]>([]);
  const [basketList, setBasketList] = useState<BasketList[]>([]);

  function getItemQuantity(id: number) {
    return basktetItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number, price: number, title: string) {
    setBasketItem((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    setBasketItemNumber((prev) => prev + 1);
    setBasketValue((prev) => prev + price);
    setBasketList([...basketList, { title }]);
  }

  function decreasetItemQuantity(id: number, price: number) {
    setBasketItem((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    setBasketItemNumber((prev) => prev - 1);
    setBasketValue((prev) => prev - price);
  }
  return (
    <AppContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreasetItemQuantity,
        basketValue,
        setBasketValue,
        basketItemNumber,
        setBasketItemNumber,
        basketList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
export { AppContextProvider };
