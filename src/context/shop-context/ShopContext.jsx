import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data.json";
export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  useEffect(() => {
    setProducts(SHOP_DATA);
    console.log(products);
  }, []);
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
