import React from "react";
import {TextField} from "@material-ui/core";
import {Grid} from "@material-ui/core";

const SearchBox = ({searchQuery, onChange, placeholder}) => {
  return (
    <Grid item xs={12}>
      <TextField
        autoFocus
        onChange={(e) => onChange(e.currentTarget.value)}
        name="search"
        value={searchQuery}
        margin="dense"
        id="Search"
        label={placeholder}
        type="text"
        fullWidth
      />
    </Grid>
  );
};

export default SearchBox;
