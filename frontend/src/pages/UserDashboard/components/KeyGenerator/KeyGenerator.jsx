import "./KeyGenerator.css";
import { useState } from "react";
import keyIcon from "./icons/key3.svg";
import Loading from "../Loading";
import generateKey from "./javascripts/generateKey";
import fireIcon from "../../icons/fire.svg";

const KeyGenerator = () => {
  const [view, setView] = useState("collapsed");
  const [generatorStatus, setGeneratorStatus] = useState({ status: "loaded" });
  return (
    <div className="dashCategory">
      <button
        className="transparentButton"
        onClick={(e) => {
          e.preventDefault();
          setView(view == "collapsed" ? "extended" : "collapsed");
        }}
      >
        <img src={keyIcon} alt="Key icon" className="dashCategoryIcon" />
        <h2>Key Generator</h2>
      </button>
      {view == "extended" && (
        <div>
          {generatorStatus.status == "loaded" && (
            <div className="keyGeneratorWrapper">
              <form
                action=""
                onSubmit={(e) => {
                  generateKey(e, setGeneratorStatus);
                }}
              >
                <select name="level" id="levelKey">
                  <option defaultValue="" hidden={true}>
                    --Select Account Level--
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                  <option value="Blogger">Blogger</option>
                  <option value="Regular">Regular</option>
                </select>
                <button type="submit">Generate Key!</button>
              </form>
              <div className="generatedKey">
                {generatorStatus.success && (
                  <div>
                    <p>{`New code for ${generatorStatus.data.level}: ${generatorStatus.data.code}`}</p>
                    <p>Codes are invalid after 30 minutes</p>
                  </div>
                )}
                {generatorStatus.error && (
                  <div className="keyGeneratorError">
                    <img src={fireIcon} alt="Error icon" />
                    <p>There was an error. Please try again later</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {generatorStatus.status == "loading" && (
            <div className="keyGeneratorLoading">
              <Loading />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default KeyGenerator;
