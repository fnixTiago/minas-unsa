import React from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import _ from "lodash";
import TimelineIcon from "@material-ui/icons/Timeline";
import LabelIcon from "@material-ui/icons/Label";
import SchoolIcon from "@material-ui/icons/School";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    "padding-left": "16px", 
    "padding-right": "16px",
    // paddingLeft: "38px",
    
    // paddingLeft: theme.spacing(4),
  },
  margen: {
    "padding-left": "0px", 
    "padding-right": "0px",

  }
});
class ShowFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      nameList: "sin nombre",
      selectItems: [],
      isLevel: false,
      total: 0,
    };
  }
  getStatesIni = () => {
    if (this.props.dataList) {
      // console.log("ingresosoo")
      this.setState({
        dataList: this.props.dataList,
      });
    }
    if (this.props.nameList) {
      // console.log("ingresosoo")
      this.setState({
        nameList: this.props.nameList,
      });
    }
  };
  componentDidMount = () => {
    this.getStatesIni();
  };
  componentDidUpdate = (prevProps, prevState) => {
    // console.log("prevProps", prevProps);
    // console.log("prevProps", this.props);
    // console.log("prevState", prevState);
    if (prevProps.selectItems != this.props.selectItems) {
      this.setState({
        selectItems: this.props.selectItems,
      });
    }
    if (prevProps.dataList != this.props.dataList) {
      // console.log("dataList---",this.props.dataList)
      this.setState({
        dataList: this.props.dataList,
      });
    }
    // if (prevProps.total != this.props.total) {
    //   this.setState({
    //     total: this.props.total,
    //   });
    // }
  };
  onChangeEtiqueta = () => {
    this.setState({
      isLabel: !this.state.isLabel,
    });
  };
  onChangeLevel = () => {
    this.setState({
      isLevel: !this.state.isLevel,
    });
  };
  marcarItem = (e, item) => {
    e.preventDefault();
    // console.log("Selecciono: ", item);
    const currentIndex = this.state.selectItems.indexOf(item);
    const newChecked = this.state.selectItems;

    if (currentIndex === -1) {
      //si no esta lo agrega
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // console.log("newChecked",newChecked)
    this.props.itemsSelect(newChecked);
  };
  render() {
    const { classes } = this.props;
    // const classes = useStyles();
    // console.log("selectItems",  this.state.selectItems)
    let { selectItems, nameList, isLevel, dataList } = this.state;
    let ttt = this;
    return (
      <>
        {/* <List component="div" disablePadding>
          <ListItem
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary={"Total de resultados"} />
            <ListItemSecondaryAction>
              <p>{this.state.total}</p>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        */}
        <List className={classes.root}>
          {/* Niveles */}
          <ListItem  className={classes.margen} button onClick={this.onChangeLevel}>
            {/* <ListItemIcon>
            <LabelIcon />
          </ListItemIcon> */}
            <ListItemText primary={nameList} />
            {isLevel ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isLevel} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dataList.map(function(item) {
                let val = item.value;
                // console.log("--item", item)
                const labelId = `checkbox-list-label-${val}`;
                return (
                  <ListItem
                    className={classes.nested}
                    key={val}
                    role={undefined}
                    dense
                    button
                    onClick={(e) => ttt.marcarItem(e, val)}
                  >
                    {/* <ListItemIcon> */}
                    <ListItemText id={labelId} primary={val} />
                    <Checkbox
                      edge="start"
                      checked={selectItems.indexOf(val) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                    {/* </ListItemIcon> */}
                    {/* <ListItemSecondaryAction>
                    <p style={{ color: "#9c27b0" }}>{count}</p>
                  </ListItemSecondaryAction> */}
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      </>
    );
  }
}
export default withStyles(useStyles)(ShowFilters);
// export default ShowFilters;
