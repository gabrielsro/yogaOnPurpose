import "./AssetsList.css";
import dateFormatter from "../../../../../../javascripts/dateFormatter";
import deleteIcon from "../../../../icons/delete.svg";
import editIcon from "../../../../icons/edit2.svg";
import draftIcon from "../../../../icons/pause2.svg";
import publishIcon from "../../../../icons/play.svg";
import placeholderPicture from "./images/picturePlaceholder2.svg";
import { useState } from "react";
import PostEditor from "./components/PostEditor";
import EventEditor from "./components/EventEditor";
import ItemEditor from "./components/ItemEditor";
import itemResize from "./javascripts/itemResize";
import deletePost from "./javascripts/deletePost";
import deleteEvent from "./javascripts/deleteEvent";
import deleteItem from "./javascripts/deleteItem";
import Modal from "../../../../../../components/Modal";
import WarningOption from "../../../WarningOption";
import Loading from "../../../Loading";
import SuccessPage from "../../../../../SuccessPage";
import Error from "../../../Error";

const AssetsList = ({
  assets,
  type,
  setEventListState,
  setItemsListState,
  setPostListState,
}) => {
  const [assetState, setAssetState] = useState({ showing: [] });
  const [assetDelete, setAssetDelete] = useState({ status: "off" });
  const [listState, setListState] = useState({ status: "loaded" });
  console.log(assetState);
  console.log("ASSETLIST RENDER");

  if (assetDelete.status == "accepted") {
    assetDelete.type == "post" &&
      deletePost(
        setPostListState,
        assetDelete.assetId,
        setListState,
        setAssetDelete,
      );

    assetDelete.type == "event" &&
      deleteEvent(
        setEventListState,
        assetDelete.assetId,
        setListState,
        setAssetDelete,
      );
    assetDelete.type == "item" &&
      deleteItem(
        setItemsListState,
        assetDelete.assetId,
        setListState,
        setAssetDelete,
      );
  }

  console.log(assetDelete);

  return (
    <ul className="assetList" id={type == "item" ? "item" : "regular"}>
      {assetDelete.status == "question" && (
        <Modal>
          <WarningOption
            message={`Do you want to permanently delete "${assetDelete.assetName}"?`}
            stateSetter={setAssetDelete}
            type={type}
            assetId={assetDelete.assetId}
          />
        </Modal>
      )}
      {assetDelete.status == "accepted" && (
        <Modal>
          <Loading />
        </Modal>
      )}
      {listState.status == "success" && (
        <Modal>
          <SuccessPage message={listState.message} />
        </Modal>
      )}
      {listState.status == "error" && (
        <Modal>
          <Error message={listState.message} />
        </Modal>
      )}
      {listState.status == "loaded" &&
        assets.map((asset, index) => (
          <li
            key={asset._id}
            className="assetListElementWrapper"
            id={type == "item" ? `item${asset._id}` : ""}
            data-position={index}
          >
            <div className="assetsListElement">
              {type == "post" && (
                <div className="assetBasics">
                  <div className="postBasicsTitle">
                    <p>{asset.title}</p>
                  </div>
                  <div className="postBasicsAuthor">
                    <p>{asset.authorName}</p>
                  </div>
                  <div className="postBasicsDate">
                    <p>{dateFormatter(asset.createdAt)}</p>
                  </div>
                </div>
              )}
              {type == "event" && (
                <div className="assetBasics">
                  <div className="eventBasicsName">
                    <p>{asset.name}</p>
                  </div>
                  <div className="eventBasicsLocation">
                    <p>{asset.location}</p>
                  </div>
                  <div className="eventBasicsOrganizers">
                    <p>{`By: ${asset.organizers[0]?.firstName} ${asset.organizers[0]?.lastName}`}</p>
                  </div>
                  <div className="eventBasicsDate">
                    <p>{`Starts: ${dateFormatter(asset.dateStart)}`}</p>
                    <p>{`Ends: ${
                      asset.dateEnd ? dateFormatter(asset.dateEnd) : "N/A"
                    }`}</p>
                  </div>
                </div>
              )}
              {type == "item" && (
                <div className="assetBasics" id="assetItem">
                  <div className="assetBasicsImg">
                    {asset.pictures.length < 1 ? (
                      <img src={placeholderPicture} alt="Placeholder item" />
                    ) : (
                      <img
                        src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_thumb,w_300,g_face/v1696457085/${asset.thumbnail}`}
                        alt="Item"
                      />
                    )}
                  </div>
                  <div className="assetBasicsInfo">
                    <p>{asset.name}</p>
                    <p>
                      {asset.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <p>{`Uploader: ${asset.uploaderName}`}</p>
                    <p>{`Published on: ${dateFormatter(asset.createdAt)}`}</p>
                    {asset.createdAt !== asset.updatedAt && (
                      <p>{`Last update: ${dateFormatter(asset.createdAt)}`}</p>
                    )}
                  </div>
                </div>
              )}
              <div className="assetMore">
                <div className="assetInfo">
                  <p>{asset.status}</p>
                </div>
                <div className="assetActions">
                  <button
                    className="transparentButton assetActionDelete"
                    onClick={(e) => {
                      e.preventDefault();
                      setAssetDelete({
                        status: "question",
                        assetName: type == "post" ? asset.title : asset.name,
                        assetId: asset._id,
                      });
                    }}
                  >
                    <img src={deleteIcon} alt="Delete icon" />
                  </button>
                  <button
                    className="transparentButton assetActionEdit"
                    onClick={(e) => {
                      e.preventDefault();
                      type == "post" &&
                        setAssetState({
                          showing: assetState.showing.some(
                            (s) => s == `editPost${asset._id}`,
                          )
                            ? assetState.showing.filter(
                                (s) => s !== `editPost${asset._id}`,
                              )
                            : assetState.showing.concat([
                                `editPost${asset._id}`,
                              ]),
                        });
                      type == "event" &&
                        setAssetState({
                          showing: assetState.showing.some(
                            (s) => s == `editEvent${asset._id}`,
                          )
                            ? assetState.showing.filter(
                                (s) => s !== `editEvent${asset._id}`,
                              )
                            : assetState.showing.concat([
                                `editEvent${asset._id}`,
                              ]),
                        });
                      type == "item" &&
                        setAssetState({
                          showing: assetState.showing.some(
                            (s) => s == `editItem${asset._id}`,
                          )
                            ? assetState.showing.filter(
                                (s) => s !== `editItem${asset._id}`,
                              )
                            : assetState.showing.concat([
                                `editItem${asset._id}`,
                              ]),
                        });
                      type == "item" && itemResize(`item${asset._id}`);
                    }}
                  >
                    <img src={editIcon} alt="Edit icon" />
                  </button>
                  {asset.status == "published" && (
                    <button className="transparentButton assetActionDraft">
                      <img src={draftIcon} alt="Draft icon" />
                    </button>
                  )}
                  {asset.status == "draft" && (
                    <button className="transparentButton assetActionPublish">
                      <img src={publishIcon} alt="Publish icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            {assetState.showing.some((s) => s == `editPost${asset._id}`) &&
              type == "post" && (
                <PostEditor post={asset} setPostListState={setPostListState} />
              )}
            {assetState.showing.some((s) => s == `editEvent${asset._id}`) &&
              type == "event" && (
                <EventEditor
                  event={asset}
                  setEventListState={setEventListState}
                />
              )}
            {assetState.showing.some((s) => s == `editItem${asset._id}`) &&
              type == "item" && (
                <ItemEditor
                  item={asset}
                  setItemsListState={setItemsListState}
                />
              )}
          </li>
        ))}
    </ul>
  );
};
export default AssetsList;
