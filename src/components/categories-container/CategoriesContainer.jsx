import CategoryItem from "../category-item/CategoryItem";
import "./CategoriesContainer.scss";

function CategoriesContainer({ Categories }) {
  return (
    <div className="categories-container">
      {Categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoriesContainer;
