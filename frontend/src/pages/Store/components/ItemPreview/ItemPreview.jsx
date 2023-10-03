import "./ItemPreview.css";
import { Link } from "react-router-dom";
import itemPlaceholder from "../../../UserDashboard/components/Assets/components/AssetsList/images/picturePlaceholder2.svg";

const ItemPreview = ({ item }) => {
  return (
    <li className="itemCard">
      <Link to={`/viewItem/${item._id}`}>
        <div className="itemThumbnail">
          <img src={itemPlaceholder} alt="Item placeholder" />
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
