import "./PostsList.css";
import getPosts from "./javascripts/getPosts";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import AssetsList from "../AssetsList";

const PostsList = ({ setLoggedUser, loggedUser }) => {
  const [listState, setListState] = useState({ status: "loading" });
  useEffect(() => {
    listState.status == "loading" && getPosts(setListState);
  }, [loggedUser, listState.status]);

  return (
    <div>
      {listState.status == "loading" && <Loading />}
      {listState.status == "error" && (
        <Error message={"We couldn't access the posts at this time"} />
      )}
      {listState.status == "success" && (
        <AssetsList
          assets={listState.result}
          setLoggedUser={setLoggedUser}
          type="post"
          setPostListState={setListState}
        />
      )}
    </div>
  );
};
export default PostsList;
