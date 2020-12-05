import React from "react";
import TabHeader from "../TabHeader";
import EnhancedTable from "./EntryTableUI";
function EntryForTheAYs() {
  return (
    <React.Fragment>
      <TabHeader headerText={"Entry for the AYs"} />
      <EnhancedTable />
    </React.Fragment>
  );
}
export default EntryForTheAYs;
