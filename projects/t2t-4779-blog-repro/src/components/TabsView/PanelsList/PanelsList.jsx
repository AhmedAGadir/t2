import React from "react";

import MyGrid from "../../MyGrid/MyGrid";
import { useSelector } from "react-redux";
import {
  getCurrentViewAllGrids,
  getCurrentViewTabIndex,
} from "../../../reducers/selectors";
import Panel from "./Panel";

function PanelsList(props) {
  const allGrids = useSelector((state) => getCurrentViewAllGrids(state));
  const currentViewTabIndex = useSelector((state) =>
    getCurrentViewTabIndex(state)
  );

  let allPanels = allGrids.map((grid, i) => {
    return (
      <Panel
        className={"tabs-panel"}
        value={currentViewTabIndex}
        index={i}
        key={grid.id}
      >
        <MyGrid {...grid} />
      </Panel>
    );
  });

  return <>{allPanels}</>;
}

// export default PanelsList;
export default React.memo(PanelsList);
