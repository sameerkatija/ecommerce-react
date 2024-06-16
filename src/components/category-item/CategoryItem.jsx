import { Link } from "react-router-dom";
import "./CategoryItem.scss";

function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <Link className="directory-item-body-container" to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryItem;
