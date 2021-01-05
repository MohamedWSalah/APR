import React from "react";
import { TextField, MenuItem } from "@material-ui/core";

function DropDownMenu(props) {
  const { value, arrayMenu, label, onChange, disabled, autofocus } = props;
  return (
    <>
      <TextField
        disabled={disabled}
        autoFocus={autofocus}
        style={{ width: "35ch" }}
        select
        label={label}
        value={value}
        onChange={onChange}
      >
        {arrayMenu.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default DropDownMenu;
