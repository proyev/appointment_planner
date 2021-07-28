import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = props => {
  const renderData = () => {
    const tiles = [];
    let key = 0;
    for (const prop of props.toRender) {
      tiles.push(<Tile info={prop}
                       key={key}
      />);
      key++;
    }
    return tiles;
  }

  return (
    <div>
      {renderData()}
    </div>
  );
};
