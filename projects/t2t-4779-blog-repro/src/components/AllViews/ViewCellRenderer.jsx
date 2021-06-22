import React, { Component } from "react";

import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { IconButton } from "@material-ui/core";

export default class ViewCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      viewName: this.props.data.viewName
        ? this.props.data.viewName
        : "New View",

      styles: {
        backgroundColor: "rgba(0,0,0,0)",
      },
    };
    this.btnRef = React.createRef();
    this.onDeleteView = this.onDeleteView.bind(this);
  }

  onDeleteView(e) {
    document.activeElement.blur(); // workaround for flush update warning
    e.stopPropagation();
    let viewId = this.props.data.viewId;
    this.props.destroyView(viewId);
  }

  componentDidMount() {
    this.btnRef.current.addEventListener("click", this.onDeleteView);
  }

  componentWillUnmount() {
    this.btnRef.current.removeEventListener("click", this.onDeleteView);
  }

  changeBackgroundColor(color) {
    this.setState({
      ...this.state,
      styles: { ...this.state.styles, backgroundColor: color },
    });
  }

  render() {
    return (
      <div>
        <IconButton
          color="primary"
          variant="contained"
          onMouseEnter={() => {
            this.changeBackgroundColor("rgba(255,255,255,0.7)");
          }}
          onMouseLeave={() => {
            this.changeBackgroundColor("rgba(0,0,0,0)");
          }}
          style={{
            backgroundColor: this.state.styles.backgroundColor,
            marginRight: "10px",
          }}
          ref={this.btnRef}
          aria-label="delete"
        >
          <DeleteOutlinedIcon color="primary" fontSize="small" />
        </IconButton>

        {this.state.viewName}
      </div>
    );
  }
}
