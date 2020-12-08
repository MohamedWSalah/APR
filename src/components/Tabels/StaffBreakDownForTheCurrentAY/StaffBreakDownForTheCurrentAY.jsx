import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "./StaffBreakDownTableUI";

const dataToBeDisplayed = [
  {
    id: 1,
    numberOfStaff: "1",
    fTAcademicStaff: 12,
    pTAcademicStaff: 11,
    SSR: 90,
  },
  {
    id: 2,
    numberOfStaff: "2",
    fTAcademicStaff: 14,
    pTAcademicStaff: 900,
    SSR: 80,
  },
];
function StaffBreakDownForTheCurrentAY() {
  return (
    <React.Fragment>
      <AboveTableTExt
        headerText={"Staff Breakdown For The Current AY"}
      ></AboveTableTExt>
      <Table dataToBeDisplayed={dataToBeDisplayed} />
    </React.Fragment>
  );
}
export default StaffBreakDownForTheCurrentAY;
