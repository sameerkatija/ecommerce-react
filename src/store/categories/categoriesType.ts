export enum CATEGORIES_TYPE {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
