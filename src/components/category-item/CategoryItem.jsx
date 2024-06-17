import {
  BodyImageContainer,
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
} from "./CategoryItem-styles";

function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BodyImageContainer imageurl={imageUrl}></BodyImageContainer>
      <DirectoryItemBodyContainer to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
}

export default CategoryItem;
