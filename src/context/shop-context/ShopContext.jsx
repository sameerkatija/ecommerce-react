import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDicuments } from "../../utils/firebase/firebase";
// import SHOP_DATA from "../../shop-data";
export const ShopContext = createContext({
  categoriesMap: {},
});

export const ShopProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionsAndDocuments("categories", SHOP_DATA);
    // setProducts(SHOP_DATA);
    // console.log(products);
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDicuments();
      setCategoriesMap(categories);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
