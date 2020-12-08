import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";

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
];
function ExternalExaminerReport() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"External Examiner Report"}></AboveTableTExt>
      <Table dataToBeDisplayed={dataToBeDisplayed} />
    </React.Fragment>
  );
}
export default ExternalExaminerReport;
