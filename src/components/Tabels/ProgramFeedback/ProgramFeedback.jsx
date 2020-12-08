import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";
const rowData = [
  "Lengthy Course works",
  "Few overlaps among some of the modules",
  "Rescheduling of missing lectures",
];
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
  {
    id: 4,
    issue: "Example 4",
    action: "Example Action 4",
  },
  {
    id: 5,
    issue: "Example 5",
    action: "Example Action 4",
  },
];
function ProgramFeedback() {
  return (
    <React.Fragment>
      <AboveTableTExt
        headerText={"Program And Module feedback"}
      ></AboveTableTExt>
      <Table
        texts={rowData}
        numbers={numberIndex}
        dataToBeDisplayed={dataToBeDisplayed}
      />
    </React.Fragment>
  );
}
export default ProgramFeedback;
