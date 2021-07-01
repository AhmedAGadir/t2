import React from "react";

const Panel = (props) => {
  const { value, index, children, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <> {children} </>}
    </div>
  );
};

export default React.memo(Panel, areEqual);

function areEqual(prevProps, nextProps) {
  return (
    prevProps.value === nextProps.value &&
    prevProps.index === nextProps.index &&
    prevProps.children.props.rowData === nextProps.children.props.rowData
  );
}
