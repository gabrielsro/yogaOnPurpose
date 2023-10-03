import "./StoreListPage.css";
import ItemPreview from "../ItemPreview";

const StoreListPage = ({ itemList }) => {
  return (
    <ul className="storeListPage">
      {itemList.map((item) => (
        <ItemPreview key={item._id} item={item} />
      ))}
    </ul>
  );
};
export default StoreListPage;
