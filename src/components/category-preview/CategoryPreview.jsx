import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";

import {
  CategoryPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CategoryPreview-styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </TitleContainer>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
