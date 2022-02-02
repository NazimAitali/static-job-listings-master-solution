import React from "react";
import "./style.scss";
const Filter = ({ filterList, removeToFilter, resetFilter }) => {
  return (
    <>
      {filterList.length !== 0 ? (
        <div className="Filter-card">
          <div className="Filter-content">
            <div className="Filter">
              {filterList.map((filter, i) => (
                <div className="Tags-content" key={i}>
                  <div className="Tags">{filter}</div>
                  <div
                    className="Delete-tag"
                    onClick={() => removeToFilter(filter)}
                  ></div>
                </div>
              ))}
            </div>

            <div className="Filter-btn">
              <button onClick={() => resetFilter()}>Clear</button>{" "}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Filter;
