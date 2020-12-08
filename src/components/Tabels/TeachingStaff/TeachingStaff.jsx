import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";
const rowData = ["Web Modeling", "TAs", "Selected topics modules"];
const numberIndex = [0, 1, 2];
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
function TeachingStaff() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"Teaching Staff"}></AboveTableTExt>
      <Table
        texts={rowData}
        numbers={numberIndex}
        dataToBeDisplayed={dataToBeDisplayed}
      />
    </React.Fragment>
  );
}
export default TeachingStaff;
