import "./ItemPreview.css";
import { Link } from "react-router-dom";
import itemPlaceholder from "../../../UserDashboard/components/Assets/components/AssetsList/images/picturePlaceholder2.svg";

const ItemPreview = ({ item }) => {
  console.log(item.thumbnail);
  return (
    <li className="itemCard">
      <Link to={`/viewItem/${item._id}`}>
        <div className="itemThumbnail">
          {item.thumbnail && (
            <img
              src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_thumb,w_300,g_face/v1696457085/${item.thumbnail}`}
              alt="Item"
            />
          )}
          {!item.thumbnail && (
            <img src={itemPlaceholder} alt="Item placeholder" />
          )}
        </div>
        <div className="itemCardContents">
          <div className="itemName">{item.name}</div>
          <div className="itemPrice">
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </Link>
    </li>
  );
};
export default ItemPreview;
