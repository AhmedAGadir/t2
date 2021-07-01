import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { actions } from "../../reducers/gridActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SaveLocalBtn() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(actions.saveStoreStateToLocalStorage());
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className={"action-btn"}
        variant="outlined"
        color="primary"
        size="large"
      >
        SAVE STATE TO LOCAL STORAGE
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          State saved to local storage!
        </Alert>
      </Snackbar>
    </div>
  );
}
