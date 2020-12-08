import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";
const rowData = [
  "Two Program Exam boards (2 PEBs) were held during S1 & S2 AY 18/19",
];
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
function LSBULinkTutorReports() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"LSBU Link Tutor Reports"}></AboveTableTExt>
      <Table
        texts={rowData}
        numbers={numberIndex}
        dataToBeDisplayed={dataToBeDisplayed}
      />
    </React.Fragment>
  );
}
export default LSBULinkTutorReports;
