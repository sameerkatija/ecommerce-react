import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDicuments } from "../../utils/firebase/firebase";
// import SHOP_DATA from "../../shop-data";

const INITIAL_STATE = {
  categoriesMap: {},
};

const SHOP_TYPE = {
  GET_CATEGORIES_TO_MAP: "GET_CATEGORIES_TO_MAP",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CATEGORIES_TO_MAP":
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in the Shop reducer`);
  }
};

export const ShopContext = createContext({
  categoriesMap: {},
});

export const ShopProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [state, dispatch] = useReducer(shopReducer, INITIAL_STATE);
  const { categoriesMap } = state;
  const setCategoriesMap = (categories) => {
    dispatch({ type: SHOP_TYPE.GET_CATEGORIES_TO_MAP, payload: categories });
  };
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
