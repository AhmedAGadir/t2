import Tab from "@material-ui/core/Tab";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Input } from "@material-ui/core";
import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../reducers/gridActions";

function GridTab(props) {
  const { classes, gridName = "New Tab", gridId, index, ...tabProps } = props;

  const [isEditing, setEditing] = useState(false);
  const [inputVal, setInputValue] = useState(gridName);

  const viewId = useSelector((state) => {
    return state.currentViewInfo.id;
  });

  //   changeTabName(viewId, gridId, newName)
  const dispatch = useDispatch();

  function stopEditing() {
    dispatch(actions.changeTabName(viewId, gridId, inputVal));
    setEditing(false);
  }

  return (
    <Fragment>
      {!isEditing ? (
        <Tab
          {...tabProps}
          classes={{ wrapper: classes.tabWrapper }}
          component="div"
          onDoubleClick={(e) => {
            setEditing(true);
          }}
          label={gridName}
          {...a11yProps(index)}
          icon={
            <IconButton
              container="div"
              onClick={(e) => {
                e.stopPropagation(); // to prevent Parent onChange handler
                dispatch(actions.destroyTab(index));
              }}
            >
              <CloseIcon></CloseIcon>
            </IconButton>
          }
        ></Tab>
      ) : (
        <Tab
          {...tabProps}
          component="div"
          icon={
            <Input
              onFocus={(e) => {
                e.target.select();
              }}
              defaultValue={inputVal}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              autoFocus
              onBlur={() => {
                stopEditing();
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  stopEditing();
                }
              }}
            ></Input>
          }
        ></Tab>
      )}
    </Fragment>
  );
}

export default React.memo(GridTab);

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
