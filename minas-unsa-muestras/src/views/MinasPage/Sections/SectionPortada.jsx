import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { withRouter } from "react-router-dom";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";
import bgInicio from "assets/img/minas/inicio.jpg";
import logo from "assets/img/minas/logo.png";


class SectionPortada extends React.Component {
  goMuestras = () => {
    this.props.history.push("/muestras");
  };
  render() {
    // function SectionHeaders({ ...props }) {
    const { classes, ...rest } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    const container = {
      top: 0,
      left: 0,
      width: "0%",
      height: "100%",
      "z-index": 1,
      display: "block",
      content: "",
      position: "absolute",
    };
    return (
      // we've set the className to cd-section so we can make smooth scroll to it
      <div className="cd-section" {...rest}>
        <div className={classes.sectionBlank} id="blanksection" />
        {/* HEADER 1 START */}
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${bgInicio}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <img src={logo} width="512px" />
                  <h2 className={classes.title} style={{ color: "black" }}>
                    Laboratorio de Caracterización Mineralogica
                  </h2>
                  <h3>DEPARTAMENTO DE GEOLOGIA Y GEOFISICA</h3>
                  <br />
                  <Button
                  style ={{background: "#214492"}}
                  size="lg"
                  href="https://www.app.geolabaqp.com/"
                  // target="_blank"
                  // rel=""
                >
                    VER MUESTRAS
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={5} md={5} className={classes.mlAuto} />
              </GridContainer>
            </div>
          </div>
        </div>
        {/* HEADER 1 END */}
        {/* HEADER 2 START */}
        <div>
          <Header
            absolute
            brand="Creative Tim"
            color="transparent"
            links={
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Home
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      About us
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Products
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Contact us
                    </Button>
                  </ListItem>
                </List>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      href="https://twitter.com/CreativeTim"
                      target="_blank"
                      className={`${classes.navLink} ${
                        classes.navLinkJustIcon
                      }`}
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      href="https://www.facebook.com/CreativeTim"
                      target="_blank"
                      className={`${classes.navLink} ${
                        classes.navLinkJustIcon
                      }`}
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      href="https://www.instagram.com/CreativeTimOfficial"
                      target="_blank"
                      className={`${classes.navLink} ${
                        classes.navLinkJustIcon
                      }`}
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </ListItem>
                </List>
              </div>
            }
          />
        </div>
        {/* HEADER 2 END */}
        {/* HEADER 3 START */}
      </div>
    );
  }
}
// export default withStyles(headersStyle)(SectionHeaders);
export default withRouter(withStyles(headersStyle)(SectionPortada));
