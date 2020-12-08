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
];
function ReviewOfAssessments() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"Review of assessments"}></AboveTableTExt>
      <p>
        Issues identified by the Subject Advisor’s/Link Tutor’s review or the
        External Examiners review of assessments.
      </p>
      <Table dataToBeDisplayed={dataToBeDisplayed} />
    </React.Fragment>
  );
}
export default ReviewOfAssessments;
