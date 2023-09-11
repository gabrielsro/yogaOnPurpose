import "./AssetsList.css";
import dateFormatter from "../../../../../../javascripts/dateFormatter";
import deleteIcon from "../../../../icons/delete.svg";
import editIcon from "../../../../icons/edit2.svg";
import draftIcon from "../../../../icons/pause2.svg";
import publishIcon from "../../../../icons/play.svg";

const AssetsList = ({ assets, type }) => {
  return (
    <ul className="assetList">
      {assets.map((asset) => (
        <li key={asset._id} className="assetsListElement">
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
                <p>{`By: ${asset.organizers[0].firstName} ${asset.organizers[0].lastName}`}</p>
              </div>
              <div className="eventBasicsDate">
                <p>{`Starts: ${dateFormatter(asset.dateStart)}`}</p>
                <p>{`Ends: ${
                  asset.dateEnd ? dateFormatter(asset.dateEnd) : "N/A"
                }`}</p>
              </div>
            </div>
          )}
          <div className="assetMore">
            <div className="assetInfo">
              <p>{asset.status}</p>
            </div>
            <div className="assetActions">
              <button className="transparentButton assetActionDelete">
                <img src={deleteIcon} alt="Delete icon" />
              </button>
              <button className="transparentButton assetActionEdit">
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
        </li>
      ))}
    </ul>
  );
};
export default AssetsList;