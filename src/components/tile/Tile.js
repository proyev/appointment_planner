import React from "react";

export const Tile = (props) => {
  const renderTiles = () => {
    const tileInfo = [];
    let it = 0;
    for (const elem in props.info) {
      if (!it) {
        tileInfo.push(
            <p className="tile-title">{props.info[elem]}</p>);
      } else {
        tileInfo.push(
            <p className="tile">{props.info[elem]}</p>);
      }
      it++;
    }
    return tileInfo;
  }

  return (
    <div className="tile-container">
      {renderTiles()}
    </div>
  );
};
