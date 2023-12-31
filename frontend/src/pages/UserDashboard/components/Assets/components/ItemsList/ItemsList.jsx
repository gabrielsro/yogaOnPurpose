import "./ItemsList.css";
import getItems from "./javascripts/getItems";
import { useState, useEffect } from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import AssetsList from "../AssetsList";

const ItemsList = () => {
  const [listState, setListState] = useState({ status: "loading" });
  useEffect(() => {
    listState.status == "loading" && getItems(setListState);
  }, [listState.status]);

  console.log("ITEMSLIST RENDER:");
  console.log(listState);

  return (
    <div>
      {listState.status == "loading" && <Loading />}
      {listState.status == "error" && (
        <Error message={"We couldn't access the store at this time"} />
      )}
      {listState.status == "success" && (
        <AssetsList
          assets={listState.result}
          setItemsListState={setListState}
          type="item"
        />
      )}
    </div>
  );
};
export default ItemsList;
