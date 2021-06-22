import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { actions } from "../../reducers/gridActions";
import generateGridConfig from "../../helpers/generateGridConfig";
import SaveLocalBtn from "./SaveLocalBtn";

function ActionButtons(props) {
  const dispatch = useDispatch();

  function addNewTab() {
    const gridConfig = generateGridConfig();

    dispatch(actions.createNewTab(gridConfig));
  }

  return (
    <div className={"action-btn-container"}>
      <Button
        className={"action-btn"}
        onClick={() => dispatch(actions.createNewView())}
        variant="outlined"
        color="primary"
        size="large"
      >
        ADD NEW VIEW
      </Button>

      <Button
        className={"action-btn"}
        onClick={() => addNewTab()}
        variant="outlined"
        color="primary"
        size="large"
      >
        ADD NEW TAB
      </Button>
      <SaveLocalBtn></SaveLocalBtn>

      <Button
        onClick={() => localStorage.clear()}
        className={"action-btn"}
        variant="outlined"
        color="primary"
        size="large"
      >
        CLEAR LOCAL STORAGE
      </Button>
    </div>
  );
}

export default React.memo(ActionButtons);
