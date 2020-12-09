import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "./SupDocTableUI";

const dataToBeDisplayed = [
  {
    id: 1,
    VD: "Prof Samy",
  },
  {
    id: 2,
    VD: "Prof",
  },
  {
    id: 3,
    VD: "12/9/2020",
  },
];
function SupportingDoc() {
  return (
    <React.Fragment>
      <AboveTableTExt
        headerText={"Student Profile & marketing"}
      ></AboveTableTExt>
      <p style={{ textAlign: "left" }}>
        The following documents should be attached:<br></br>
      </p>
      <p style={{ textAlign: "left", position: "relative", left: "2%" }}>
        1. Details of each intake.
        <br></br>
        2. Minutes of meeting of the last Programme Examination Board meeting.
        <br></br>
        3. Previous External Examiner’s Report.
      </p>
      <Table dataToBeDisplayed={dataToBeDisplayed} />
    </React.Fragment>
  );
}
export default SupportingDoc;
