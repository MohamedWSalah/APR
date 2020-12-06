import React from "react";
import AboveTableTExt from "../AboveTableText";
import EditableTable from "./EntryTableUI";
function EntryForTheAYs() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"Entry for the AYs"} />
      <EditableTable />
    </React.Fragment>
  );
}
export default EntryForTheAYs;
