import "./PostsList.css";
import getPosts from "./javascripts/getPosts";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import AssetsList from "../AssetsList";

const PostsList = () => {
  const [listState, setListState] = useState({ status: "loading" });
  useEffect(() => {
    getPosts(setListState);
  }, []);
  return (
    <div>
      {listState.status == "loading" && <Loading />}
      {listState.status == "error" && (
        <Error message={"We couldn't access the posts at this time"} />
      )}
      {listState.status == "success" && (
        <AssetsList assets={listState.result} type="post" />
      )}
    </div>
  );
};
export default PostsList;
