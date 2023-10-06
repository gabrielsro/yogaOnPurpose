import "./ItemViewer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import getItem from "./javascripts/getItem";

const ItemViewer = () => {
  const [itemState, setItemState] = useState({ status: "loading" });
  const [mediaState, setMediaState] = useState({ focused: 0 });
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
          <div className="itemWrapper">
            <div className="itemContentsPage">
              <div className="itemMediaPage">
                <div className="itemMediaMain">
                  <div className="itemMainPic">
                    {itemState.result.pictures.length > 0 && (
                      <img
                        src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_thumb,w_${Math.floor(
                          window.innerWidth * 0.99,
                        )}/v1696457085/${
                          itemState.result.pictures[mediaState.focused].cdnId
                        }`}
                        alt=""
                      />
                    )}
                    {itemState.result.pictures.length < 1 && (
                      <div className="unknownItemImage">
                        <div>
                          <p>Images are not available</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {itemState.result.pictures.length > 1 && (
                  <div className="itemSlides">
                    {itemState.result.pictures.map((pic) => {
                      return (
                        <button
                          key={pic._id}
                          className="itemSlidesThumbnail"
                          onClick={() =>
                            setMediaState({ focused: pic.position })
                          }
                        >
                          <img
                            src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_thumb,w_300/v1696457085/${pic.cdnId}`}
                            alt={`Item thumbnail ${pic.position}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="itemInfoPage">
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
                  dangerouslySetInnerHTML={{
                    __html: itemState.result.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ItemViewer;
