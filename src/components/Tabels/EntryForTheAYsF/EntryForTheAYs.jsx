import React from "react";
import AboveTableTExt from "../../AboveTableText";
import EntryTableUI from "./EntryTableUI";
import { Paper, TextField } from "@material-ui/core";
function EntryForTheAYs() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"Entry for the AYs"}></AboveTableTExt>
      <EntryTableUI />
      <Paper
        elevation={3}
        square={false}
        variant={"outlined"}
        style={{ marginTop: "5vw" }}
      >
        <p
          style={{
            position: "relative",
            bottom: "1vw",
            backgroundColor: "white",
            display: "inline",
            fontWeight: "bold",
          }}
        >
          Commentary
        </p>
        <br />
        <TextField
          style={{
            width: "90%",
          }}
          placeholder="Commentary here......"
          multiline
          rows={2}
          rowsMax={4}
        />
      </Paper>
    </React.Fragment>
  );
}
export default EntryForTheAYs;
