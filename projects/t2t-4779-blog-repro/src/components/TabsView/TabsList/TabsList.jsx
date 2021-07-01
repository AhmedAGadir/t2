import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";

import { withStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../reducers/gridActions";
import {
  getCurrentViewTabIndex,
  getCurrentViewAllGrids,
} from "../../../reducers/selectors";
import GridTab from "./GridTab";

const styles = (theme) => ({
  tabWrapper: {
    flexDirection: "row-reverse !important",
  },
  // Tab > Close Icon
  closeIconBtn: {
    color: "red !important",
    margin: "0px !important",
  },
  tabsFlexContainer: {
    height: "100%",
  },
});

function TabsList(props) {
  const { classes } = props;

  const tabIndex = useSelector((state) => getCurrentViewTabIndex(state));
  const allGrids = useSelector((state) => getCurrentViewAllGrids(state));
  const dispatch = useDispatch();

  const allTabs = mapAllGridsToTabs(allGrids, classes);

  const handleChange = (e, newVal) => {
    dispatch(actions.changeTab(newVal));
  };

  return (
    <AppBar className={"app-bar"} position="static" color="default">
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        {allTabs}
      </Tabs>
    </AppBar>
  );
}

export default withStyles(styles)(React.memo(TabsList));

//  ****
function mapAllGridsToTabs(allGrids, classes) {
  return allGrids.map((grid, index) => {
    return (
      <GridTab
        key={grid.id}
        gridName={grid.name}
        gridId={grid.id}
        index={index}
        classes={classes}
      ></GridTab>
    );
  });
}
