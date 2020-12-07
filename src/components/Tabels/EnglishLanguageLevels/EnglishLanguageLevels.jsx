import React from "react";
import AboveTableTExt from "../../AboveTableText";
import EnglishTableUI from "../EnglishLanguageLevels/EnglishTableUI";
import { Paper, TextField } from "@material-ui/core";
function EnglishLanguageLevels() {
  return (
    <React.Fragment>
      <AboveTableTExt headerText={"English Language Levels"}></AboveTableTExt>
      <EnglishTableUI />
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
export default EnglishLanguageLevels;
