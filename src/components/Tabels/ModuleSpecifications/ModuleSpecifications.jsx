import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";
const rowData = ["Items identified in relation to Module specifications"];
const numberIndex = [0];
const dataToBeDisplayed = [
  {
    id: 1,
    issue: "Example 1",
    action: "Example Action 1",
  },
  {
    id: 2,
    issue: "Example 2",
    action: "Example Action 2",
  },
  {
    id: 3,
    issue: "Example 3",
    action: "Example Action 3",
  },
];
function ModuleSpecifications() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"Module Specifications"}></AboveTableTExt>
      <Table
        texts={rowData}
        numbers={numberIndex}
        dataToBeDisplayed={dataToBeDisplayed}
      />
    </React.Fragment>
  );
}
export default ModuleSpecifications;
