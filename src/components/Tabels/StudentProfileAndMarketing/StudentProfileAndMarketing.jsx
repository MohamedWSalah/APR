import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "./StudentProfileTableUI";

const dataToBeDisplayed = [
  {
    id: 1,
    number: "1",
    keyFeatures: "Ex1",
  },
  {
    id: 2,
    number: "2",
    keyFeatures: "Ex2",
  },
];
function StudentProfileAndMarketing() {
  return (
    <React.Fragment>
      <AboveTableTExt
        headerText={"Student Profile & marketing"}
      ></AboveTableTExt>
      <Table dataToBeDisplayed={dataToBeDisplayed} />
    </React.Fragment>
  );
}
export default StudentProfileAndMarketing;
