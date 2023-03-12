import { ReactElement, createContext, useState } from "react";

import { Basket } from "./types";

const AppContext = createContext({} as Basket);

const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const [basketValue, setBasketValue] = useState(0);
  const [basketItem, setBasketItem] = useState(0);

  return (
    <AppContext.Provider
      value={{ basketValue, setBasketValue, basketItem, setBasketItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppContextProvider };
