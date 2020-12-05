import React from "react";

function TabHeader(props) {
  const { headerText } = props;
  return (
    <p
      style={{
        width: "100%",
        borderBottom: "1px solid #000",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ backgroundColor: "#fff", padding: "0 10px" }}>
        {headerText}
      </span>
    </p>
  );
}

export default TabHeader;
