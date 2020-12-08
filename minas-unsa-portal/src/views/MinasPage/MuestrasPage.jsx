import React, { Component } from "react";
import bgInicio from "assets/img/minas/inicio.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { CardContent, Card, CardHeader, Typography } from "@material-ui/core";
import "assets/scss/paginado.scss";
import ReactPaginate from "react-paginate";

import image1 from "assets/img/bg.jpg";
import ShowFilters from "./Sections/ShowFilters.jsx";
import SearchFilters from "./Sections/SearchFilters.jsx";
import SectionBuscar from "./Sections/SectionBuscar.jsx";
import SectionMapa from "./Sections/SectionMapa.jsx";
import Button from "@material-ui/core/Button";
// import iconSearch from "assets/img/minas/btn-search.svg"
// import iconMapa from "assets/img/minas/btn-mapa.svg"
// import iconLista from "assets/img/minas/btn-lista.svg"



const etiquetas = [
  { value: "0A", label: "A0" },
  { value: "A1", label: "A1" },
  { value: "A2", label: "A2" },
  { value: "A3", label: "A3" },
  { value: "A4", label: "A4" },
  { value: "A5", label: "A5" },
  { value: "A6", label: "A6" },
];
const etiquetasB = [
  { value: "B0", label: "B0" },
  { value: "B1", label: "B1" },
  { value: "B2", label: "B2" },
  { value: "B3", label: "B3" },
  { value: "B4", label: "B4" },
  { value: "B5", label: "B5" },
  { value: "B6", label: "B6" },
];
const etiquetasC = [
  { value: "C0", label: "C0" },
  { value: "C1", label: "C1" },
  { value: "C2", label: "C2" },
  { value: "C3", label: "C3" },
  { value: "C4", label: "C4" },
  { value: "C5", label: "C5" },
  { value: "C6", label: "C6" },
];

class MuestrasPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItemsLocal: [],
      selectItemsMineral: [],
      selectItemsHidro: [],
      view: "buscar",
      // itemsSel: []
    };
  }
  addItemsSelectLocal = (item) => {
    var arrP = [];
    for (var i = 0; i < item.length; i++) {
      arrP.push({ value: item[i], label: item[i] });
    }
    this.setState({
      selectItemsLocal: item,
      selectEtiquetas: arrP,
    });
  };
  addItemsSelectMineral = (item) => {
    var arrP = [];
    for (var i = 0; i < item.length; i++) {
      arrP.push({ value: item[i], label: item[i] });
    }
    this.setState({
      selectItemsMineral: item,
      selectEtiquetas: arrP,
    });
  };
  addItemsSelectHidro = (item) => {
    var arrP = [];
    for (var i = 0; i < item.length; i++) {
      arrP.push({ value: item[i], label: item[i] });
    }
    this.setState({
      selectItemsHidro: item,
      selectEtiquetas: arrP,
    });
  };
  openView = (vista) => {
    this.setState({
      view: vista,
    });
  };
  getView = () => {
    if (this.state.view === "mapa") {
      return <SectionMapa />;
    } 
    else if(this.state.view ==="lista" ){
      return (<div>Lista en desarrollo</div>)
    }
    else {
      return <SectionBuscar />;
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <Header
          color="info"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
        /> */}
        <div className={classes.main}>
          <div className="cd-section" {...rest}>
            <GridContainer style={{ padding: "40px" }}>
              <GridItem xs={12} sm={3} md={3}>
                <img
                  src={require("assets/img/minas/logo.png")}
                  alt="Logo"
                  style={{ height: "50px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3} />
              <GridItem xs={12} sm={3} md={3}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Button  onClick={() => this.openView("buscar")}>
                      <div>
                        <img
                          src={require("assets/img/minas/btn-search.svg")}
                          alt="Logo"
                          style={{ height: "50px" }}
                        />
                        Buscar
                      </div>
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Button  onClick={() => this.openView("mapa")}>
                      <div>
                        <img
                          src={require("assets/img/minas/btn-map.svg")}
                          alt="Logo"
                          style={{ height: "50px" }}
                        />
                        Mapa
                      </div>
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Button  onClick={() => this.openView("lista")}>
                      <div>
                        <img
                          src={require("assets/img/minas/btn-list.svg")}
                          alt="Logo"
                          style={{ height: "50px" }}
                        />
                        {/* <iconLista/> */}
                        Lista
                      </div>
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={3} md={3} />
            </GridContainer>
            <div>
              <GridContainer style={{ "justify-content": "center" }}>
                <GridItem xs={12} sm={3} md={3}>
                  {/* <div
                    style={{ background: "#EFEFEF", "border-radius": "15px" }}
                  >
                    busqueda
                  </div> */}

                  <div style={{ margin: "16px" }}>
                    <SearchFilters />
                    <ShowFilters
                      dataList={etiquetas}
                      nameList={"Localización"}
                      selectItem={this.state.selectItemsLocal}
                      itemsSelect={this.addItemsSelectLocal}
                    />
                    <ShowFilters
                      dataList={etiquetasB}
                      nameList={"Minerales"}
                      selectItem={this.state.selectItemsMineral}
                      itemsSelect={this.addItemsSelectMineral}
                    />
                    <ShowFilters
                      dataList={etiquetasC}
                      nameList={"Alteración Hidrotermal"}
                      selectItem={this.state.selectItemsHidro}
                      itemsSelect={this.addItemsSelectHidro}
                    />
                  </div>
                </GridItem>

                <GridItem xs={12} sm={9} md={9}>
                  <Card>
                    <CardHeader>CardHeader</CardHeader>
                    <CardContent>{this.getView()}</CardContent>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(headersStyle)(MuestrasPage);
