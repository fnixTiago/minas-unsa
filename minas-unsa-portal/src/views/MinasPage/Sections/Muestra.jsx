import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import { withRouter } from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Mail from "@material-ui/icons/Mail";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";
import atlas from "assets/img/minas/atlas.png";
import movil from "assets/img/minas/app.png";
import laptop from "assets/img/minas/laptop.png";
import Carousel from "react-slick";
import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Muted from "components/Typography/Muted.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import marc from "assets/img/faces/marc.jpg";
import { data as dataMuestra } from "../database/data.js";
import { map } from "leaflet";
const copias = {
  a:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }",
  b:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }bbbbbbbbb",
  c:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }ccccc",
};

class Muestra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muestra: null,
      selectedEnabled: "a",
    };
  }
  getUrlMuestra = (url) => {
    // console.log("url.length", url.length)
    var cad = "";
    for (var i = url.length - 1; i > 0; i--) {
      if (url[i] === "/") break;
      cad = url[i] + cad;
    }
    // console.log("Cadenaa", cad)
    this.getMuestra(cad);
  };
  getMuestra = (idMuestra) => {
    var res = null;
    for (var i = 0; i < dataMuestra.length; i++) {
      let item = dataMuestra[i];
      if (item.Codigo === idMuestra) {
        // console.log("item", item);
        res = item;
        break;
      }
    }
    // dataMuestra.map(function(item) {
    //   if (item.Codigo === idMuestra) {
    //     res = item;
    //     console.log("encontrado");
    //     // break;
    //   }
    //   // console.log(item)
    // });
    // console.log("respieta", res);
    if(res ===null){
      this.props.history.push("/error-page");
    }
    else{

      this.setState({
        muestra: res,
        
      });
    }
  };

  componentDidMount = () => {
    let historia = this.props.history.location.pathname;
    console.log("historia", historia);
    this.getUrlMuestra(historia);
  };
  goMuestras = () => {
    this.props.history.push("/muestras");
  };
  handleChangeEnabled = (event) => {
    this.setState({ selectedEnabled: event.target.value });
  };
  copyCodeToClipboard = () => {
    const el = this.textArea;
    console.log("el--", el);
    el.select();
    document.execCommand("copy");
  };
  // function Muestra({ ...props }) {
  render() {
    const { classes } = this.props;
    // const { classes, ...rest } = props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    if (this.state.muestra != null) {
      console.log("this.state.muestra", this.state.muestra);
    }
    let {
      Codigo,
      Localizacion,
      Descripcion,
      Primarios,
      Secundarios,
      Textura,
      Alteraciones,
      SecuenciaParagenetica,
      EstudioEspectrometria,
      } ={
      Codigo: "",
      Localizacion: "",
      Descripcion: "",
      Primarios: "",
      Secundarios: "",
      Textura: "",
      Alteraciones: "",
      SecuenciaParagenetica: "",
      EstudioEspectrometria: "",
      
      }  
      if(this.state.muestra != null){

          Codigo=this.state.muestra.Codigo
          Localizacion=this.state.muestra.Localizacion
          Descripcion=this.state.muestra.Descripcion
          Primarios=this.state.muestra.Primarios
          Secundarios=this.state.muestra.Secundarios
          Textura=this.state.muestra.Textura
          Alteraciones=this.state.muestra.Alteraciones
          SecuenciaParagenetica=this.state.muestra.SecuenciaParagenetica
          EstudioEspectrometria=this.state.muestra.EstudioEspectrometria
        
      }

    return this.state.muestra != null ? (
      <>
        <div>
          <Header
            color="info"
            brand="Material Kit PRO React"
            links={<HeaderLinks dropdownHoverColor="info" />}
            fixed
          />
          <div className={classes.main}>
            <div className="cd-section">
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                   
                  </GridContainer>
                </div>
                <GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h2>
                      CÓDIGO DE MUESTRA
                      </h2>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <h2>
                    {Codigo}
                    </h2>
                  </GridItem>
                </GridContainer>
                </GridContainer>
              </div>
            </div>
            <div className="cd-section" style={{ background: "#F9F9F9" }}>
              <div className={classes.container}>
                <GridContainer style={{ "place-content": "center" }}>
                  <GridItem xs={12} sm={6} md={6}>
                    <div className={classes.textCenter}>
                      <div
                        className={classes.title}
                        style={{
                          "background-image":
                            "linear-gradient(180deg, #214492 6.84%, #31ADA9 100%)",
                          "background-size": "100%",
                          "-webkit-background-clip": "text",
                          "-moz-background-clip": "text",
                          "-webkit-text-fill-color": "transparent",
                          "-moz-text-fill-color": "transparent",

                          // color: "linear-gradient(180deg, #214492 6.84%, #31ADA9 100%)",
                          "font-size": "116px",
                          padding: "60px",
                        }}
                      >
                        150+
                      </div>
                      <h3 className={classes.title}>Libro de muestras</h3>
                      <p className={classes.description}>
                        Más de 150 muestras categorizadas, ordenadas, por
                        listas, mapas y etiquetas, disponibles para fines
                        investigativos
                      </p>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>

            <div className="cd-section">
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    />
                  </GridContainer>
                </div>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={5}
                    md={5}
                    style={{ "align-self": "center" }}
                  >
                    <h2 className={classes.title}>
                      Navega y encuentra muestras mineralógicas encontradas en
                      Arequipa
                    </h2>
                    <h3>
                      Más de 150 muestras categorizadas, ordenadas, por listas,
                      mapas y etiquetas.
                    </h3>
                    <br />
                    <Button
                      color="danger"
                      size="lg"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel=""
                    >
                      <i className="fas fa-ticket-alt" />
                      DESCARGAR APLICACIÓN
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2} />
                  <GridItem xs={12} sm={4} md={4}>
                    <div className={classes.phoneContainer}>
                      <img src={movil} alt="..." />
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            <div className="cd-section" style={{ background: "#F9F9F9" }}>
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    />
                  </GridContainer>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <div className={classes.phoneContainer}>
                      <img src={laptop} alt="..." />
                    </div>
                  </GridItem>

                  {/* <GridItem xs={12} sm={2} md={2} /> */}

                  <GridItem
                    xs={12}
                    sm={5}
                    md={5}
                    style={{ "align-self": "center" }}
                  >
                    <h2 className={classes.title}>
                      Toda la información siempre disponible
                    </h2>
                    <h3>
                      Más de 150 muestras categorizadas, ordenadas, por listas,
                      mapas y etiquetas.
                    </h3>
                    <br />
                    <Button
                      color="danger"
                      size="lg"
                      type="button"
                      onClick={() => this.goMuestras()}
                      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      // target="_blank"
                      // rel=""
                    >
                      <i className="fas fa-ticket-alt" />
                      VER MUESTRAS
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            <div className="cd-section">
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    >
                      <h2 className={classes.title}>Fotos del Laboratorio</h2>
                      {/* <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5> */}
                    </GridItem>
                  </GridContainer>
                </div>
                <GridContainer style={{ "justify-content": "center" }}>
                  <GridItem
                    xs={12}
                    sm={10}
                    md={8}
                    className={classes.marginAuto}
                  >
                    <Card>
                      <Carousel {...settings}>
                        <div>
                          <img
                            src={image1}
                            alt="First slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              Yellowstone National Park, United States
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img
                            src={image2}
                            alt="Second slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              Somewhere Beyond, United States
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img
                            src={image3}
                            alt="Third slide"
                            className="slick-image"
                          />
                          <div className="slick-caption">
                            <h4>
                              <LocationOn className="slick-icons" />
                              Yellowstone National Park, United States
                            </h4>
                          </div>
                        </div>
                      </Carousel>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            <div className="cd-section" style={{ background: "#F9F9F9" }}>
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    />
                  </GridContainer>
                </div>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={5}
                    md={5}
                    style={{ "align-self": "center" }}
                  >
                    <h2 className={classes.title}>Sobre el Laboratorio</h2>
                    <h3>
                      El laboratorio se dedica al estudio de minareles y tambien
                      de al descripcion de todos los estudio realizados, son
                      bienvenidos.
                      <br />
                      El laboratorio se dedica al estudio de minareles y tambien
                      de al descripcion de todos los estudio realizados, son
                      bienvenidos.
                    </h3>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2} />
                  <GridItem xs={12} sm={4} md={4}>
                    <div className={classes.iframeContainer}>
                      <iframe
                        style={{
                          width: "600px",
                          height: "450px",
                          left: "822.5px",
                          top: "151.6px",
                        }}
                        src="https://www.youtube.com/embed/IN6QnLpVEPI"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen=""
                        title="Tesla"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            <div className="cd-section">
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    >
                      <h2 className={classes.title}>Equipo</h2>
                    </GridItem>
                  </GridContainer>
                </div>
                <GridContainer style={{ "justify-content": "center" }}>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={marc} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alec Thompson</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>
                            CEO / Co-Founder
                          </h6>
                        </Muted>
                        <p className={classes.description}>
                          And I love you like Kanye loves Kanye. We need to
                          restart the human foundation.
                        </p>
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="twitter"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="facebook"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="google"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={marc} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alec Thompson</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>
                            CEO / Co-Founder
                          </h6>
                        </Muted>
                        <p className={classes.description}>
                          And I love you like Kanye loves Kanye. We need to
                          restart the human foundation.
                        </p>
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="twitter"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="facebook"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="google"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src={kendall}
                            alt="..."
                            className={classes.img}
                          />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tania Andrew</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>DESIGNER</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don't be scared of the truth because we need to
                          restart the human foundation. And I love you like
                          Kanye loves Kanye.
                        </p>
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="twitter"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="dribbble"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="linkedin"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src={christian}
                            alt="..."
                            className={classes.img}
                          />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Christian Mike</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>
                            Web Developer
                          </h6>
                        </Muted>
                        <p className={classes.description}>
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth because we need to restart the human
                          foundation.
                        </p>
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="facebook"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                          href="#pablo"
                          justIcon
                          simple
                          color="dribbble"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={avatar} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Rebecca Stormvile</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>
                            Web Developer
                          </h6>
                        </Muted>
                        <p className={classes.description}>
                          And I love you like Kanye loves Kanye. We really need
                          to restart the human foundation.
                        </p>
                      </CardBody>
                      <CardFooter
                        profile
                        plain
                        className={classes.justifyContent}
                      >
                        <Button
                          justIcon
                          simple
                          color="google"
                          href="#pablo"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google" />
                        </Button>
                        <Button
                          justIcon
                          simple
                          color="twitter"
                          href="#pablo"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                          justIcon
                          simple
                          color="dribbble"
                          href="#pablo"
                          className={classes.btn}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>

            <div className="cd-section" style={{ background: "#F9F9F9" }}>
              <div className={classes.features1}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={`${classes.mlAuto} ${classes.mrAuto}`}
                  />
                </GridContainer>
              </div>
              <GridContainer style={{ "justify-content": "center" }}>
                <GridItem xs={12} sm={8} md={8}>
                  <Card className={classes.card2}>
                    <form>
                      <CardHeader
                        contact
                        color="rose"
                        className={classes.textCenter}
                      >
                        <h4
                          className={classes.title}
                          style={{ color: "white" }}
                        >
                          Citas Bibliográficas
                        </h4>
                      </CardHeader>
                      {/* <CardBody>


                    
                  </CardBody> */}
                      <CardFooter className={classes.justifyContentBetween}>
                        <GridItem xs={12} sm={6} md={6}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={this.state.selectedEnabled === "a"}
                                  onChange={this.handleChangeEnabled}
                                  value="a"
                                  name="radio button enabled"
                                  aria-label="A"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                              }}
                              label="RIS"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={this.state.selectedEnabled === "b"}
                                  onChange={this.handleChangeEnabled}
                                  value="b"
                                  name="radio button enabled"
                                  aria-label="B"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                              }}
                              label="BibTex"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={this.state.selectedEnabled === "c"}
                                  onChange={this.handleChangeEnabled}
                                  value="c"
                                  name="radio button enabled"
                                  aria-label="C"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                              }}
                              label="Plain Text"
                            />
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card>
                            {/* <CardHeader> header</CardHeader> */}

                            <CardBody>
                              <textarea
                                style={{
                                  "border-width": "0px",
                                  background: "rgb(249, 249, 249)",
                                  width: "-webkit-fill-available",
                                  height: "200px",
                                }}
                                ref={(textarea) => (this.textArea = textarea)}
                                value={copias[this.state.selectedEnabled]}
                                // value={
                                // "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }"
                                // }
                              />
                              {/* <code ref={(code) => this.textArea = code}>{"@book{besoain1985mineralogia,"} <br></br>{ "title={Mineralog{\'\i}a de arcillas de suelos},"} <br></br>{ "author=@book{besoain1985mineralogia,"} <br></br>{ "title={Mineralog{\'\i}a de arcillas de suelos},"} <br></br>{ "author={Besoain,"} <br></br>{ "Eduardo},"} <br></br>{ "number={60},"} <br></br>{ "year={1985},"} <br></br>{ "publisher={Bib. Orton IICA/CATIE} }{Besoain,"} <br></br>{ "Eduardo},"} <br></br>{ "number={60},"} <br></br>{ "year={1985},"} <br></br>{ "publisher={Bib. Orton IICA/CATIE} }"}</code> */}
                            </CardBody>
                          </Card>
                          <div style={{ float: "right" }}>
                            <Button
                              color="primary"
                              className={classes.pullLeft}
                              onClick={() => this.copyCodeToClipboard()}
                            >
                              Copiar
                            </Button>
                          </div>
                        </GridItem>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <div
              className="cd-section"
              style={{
                background:
                  "linear-gradient(180deg, #001B56 0%, #2F9FA6 200.35%)",
              }}
            >
              <div className={classes.container}>
                {/* Feature 1 START */}
                <div className={classes.features1}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={`${classes.mlAuto} ${classes.mrAuto}`}
                    >
                      <h2 className={classes.title}>Fotos del Laboratorio</h2>
                      {/* <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5> */}
                    </GridItem>
                  </GridContainer>
                </div>
                <GridContainer style={{ "justify-content": "center" }}>
                  <GridItem
                    xs={12}
                    sm={10}
                    md={8}
                    className={classes.marginAuto}
                  />
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    ): (
      <div>
        <h2>Cargando</h2>
      </div>
    )
  }
}
// export default withStyles(featuresStyle)(Muestra);
export default withRouter(withStyles(featuresStyle)(Muestra));
