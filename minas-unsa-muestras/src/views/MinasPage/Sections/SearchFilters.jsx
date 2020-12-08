import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: 400,
    maxWidth: 360,
    background: "#EFEFEF",
    // margin: "16px"
  },
  input: {
    marginLeft: "10px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});
class SearchFilters extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Paper component="form" className={classes.root}>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="buscar ..."
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </>
    );
  }
}
export default withStyles(useStyles)(SearchFilters);
