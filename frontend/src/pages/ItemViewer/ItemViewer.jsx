import "./ItemViewer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import getItem from "./javascripts/getItem";

const ItemViewer = () => {
  const [itemState, setItemState] = useState({ status: "loading" });
  const { itemId } = useParams();
  useEffect(() => {
    getItem(itemId, setItemState);
  }, [itemId]);

  return (
    <div className="page">
      {itemState.status == "loading" && <LoadingPage />}
      {itemState.status == "error" && <ErrorPage message={itemState.message} />}
      {itemState.status == "loaded" && (
        <div>
          <div className="pageControls">
            <Link to="/store" className="returnLink">
              Return
            </Link>
          </div>
          <div className="itemTitlePage">
            <h1>{itemState.result.name}</h1>
          </div>
          <div className="itemMediaPage"></div>
          <div className="itemPricePage">
            <p>
              {itemState.result.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div
            className="itemDescriptionPage"
            dangerouslySetInnerHTML={{ __html: itemState.result.description }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default ItemViewer;
