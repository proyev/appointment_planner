import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = props => {
  const renderData = () => {
    const tiles = [];
    for (const prop of props.toRender) {
      tiles.push(<Tile info={prop} />);
    }
    return tiles;
  }

  return (
    <div>
      {renderData()}
    </div>
  );
};
