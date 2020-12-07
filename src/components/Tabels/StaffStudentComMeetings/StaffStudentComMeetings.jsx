import React from "react";
import AboveTableTExt from "../../AboveTableText";
import Table from "../ReuseableTable";
import { Paper, TextField } from "@material-ui/core";
function StaffSudentComMeetings() {
  return (
    <React.Fragment>
      <AboveTableTExt
        headerText={"Staff Students Committee Meetings"}
      ></AboveTableTExt>
      <Table />
    </React.Fragment>
  );
}
export default StaffSudentComMeetings;
