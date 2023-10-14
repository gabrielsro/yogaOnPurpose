import "./EventsList.css";
import getEvents from "./javascripts/getEvents";
import { useState, useEffect } from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import AssetsList from "../AssetsList";

const EventsList = () => {
  const [listState, setListState] = useState({ status: "loading" });
  useEffect(() => {
    listState.status == "loading" && getEvents(setListState);
  }, [listState]);

  return (
    <div>
      {listState.status == "loading" && <Loading />}
      {listState.status == "error" && (
        <Error message={"We couldn't access the events at this time"} />
      )}
      {listState.status == "success" && (
        <AssetsList
          assets={listState.result}
          setEventListState={setListState}
          type="event"
        />
      )}
    </div>
  );
};
export default EventsList;
