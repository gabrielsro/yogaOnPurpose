import "./Store.css";
import storeIcon from "./icons/shopping.svg";

const Store = () => {
  return (
    <div className="asset">
      <div className="assetTitle">
        <img src={storeIcon} alt="Store icon" />
        <p>Store</p>
      </div>
    </div>
  );
};
export default Store;
