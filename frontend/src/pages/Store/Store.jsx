import "./Store.css";
import { useState, useEffect } from "react";
import getItems from "./javascripts/getItems";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import StoreOptionsPage from "./components/StoreOptionsPage";
import StoreListPage from "./components/StoreListPage";

const Store = () => {
  const [storeState, setStoreState] = useState({ status: "loading" });
  useEffect(() => {
    getItems(setStoreState);
  }, []);
  return (
    <div className="page">
      {storeState.status == "loading" && <LoadingPage />}
      {storeState.status == "error" && (
        <ErrorPage message={storeState.message} />
      )}
      {storeState.status == "loaded" && storeState.result.length > 0 && (
        <div>
          <StoreOptionsPage />
          <StoreListPage itemList={storeState.result} />
        </div>
      )}
      {storeState.status == "loaded" && storeState.result.length < 1 && (
        <div className="emptyStorePage">
          <div>
            <p>Store is empty</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Store;
