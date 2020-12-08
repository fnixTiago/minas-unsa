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
import logoTerminos from "assets/img/minas/logoTerminos.svg";

const copias = {
  a:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }",
  b:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }bbbbbbbbb",
  c:
    "@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author=@book{besoain1985mineralogia, title={Mineralog{'i}a de arcillas de suelos}, author={Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }{Besoain, Eduardo}, number={60}, year={1985}, publisher={Bib. Orton IICA/CATIE} }ccccc",
};

class SectionFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEnabled: "a",
    };
  }
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
  // function SectionFeatures({ ...props }) {
  render() {
    const { classes } = this.props;
    // const { classes, ...rest } = props;
    console.log("selectedEnabled", this.state.selectedEnabled);
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <>
        <div className="cd-section" id="productos">
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
                  <h2 className={classes.title}>
                    Productos Producidos por el Laboratorio
                  </h2>
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
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <div className={classes.phoneContainer}>
                  <img src={atlas} alt="..." />
                </div>
              </GridItem>
              <GridItem xs={12} sm={2} md={2} />
              <GridItem xs={12} sm={5} md={5}>
                <h2 className={classes.title}>Libro de muestras</h2>
                <h3>
                  Más de 150 muestras categorizadas, ordenadas, por listas,
                  mapas y etiquetas
                </h3>
                <br />
                <Button
                  style={{ background: "#214492" }}
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel=""
                >
                  COMPRAR
                </Button>
              </GridItem>
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
                    Más de 150 muestras categorizadas, ordenadas, por listas,
                    mapas y etiquetas, disponibles para fines investigativos
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
                  style={{ background: "#214492" }}
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel=""
                >
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
                  style={{ background: "#214492" }}
                  size="lg"
                  href="https://www.app.geolabaqp.com/"
                  // target="_blank"
                  // rel=""
                >
                  VER MUESTRAS
                </Button>
                {/* <Button
                  style ={{background: "#214492"}}
                  size="lg"
                  type = "button"
                  onClick = {()=>this.goMuestras()}
                  // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  // target="_blank"
                  // rel=""
                >
                  
                  VER MUESTRAS
                </Button> */}
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
              <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
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
        <div
          className="cd-section"
          style={{ background: "#F9F9F9" }}
          id="nosotros"
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
                  El laboratorio se dedica al estudio de minareles y tambien de
                  al descripcion de todos los estudio realizados, son
                  bienvenidos.
                  <br />
                  El laboratorio se dedica al estudio de minareles y tambien de
                  al descripcion de todos los estudio realizados, son
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
                      <h6 className={classes.cardCategory}>CEO / Co-Founder</h6>
                    </Muted>
                    <p className={classes.description}>
                      And I love you like Kanye loves Kanye. We need to restart
                      the human foundation.
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
                      <h6 className={classes.cardCategory}>CEO / Co-Founder</h6>
                    </Muted>
                    <p className={classes.description}>
                      And I love you like Kanye loves Kanye. We need to restart
                      the human foundation.
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
                      <img src={kendall} alt="..." className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Tania Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don't be scared of the truth because we need to restart
                      the human foundation. And I love you like Kanye loves
                      Kanye.
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
                      <img src={christian} alt="..." className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Christian Mike</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Web Developer</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don't be scared of the
                      truth because we need to restart the human foundation.
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
                      <h6 className={classes.cardCategory}>Web Developer</h6>
                    </Muted>
                    <p className={classes.description}>
                      And I love you like Kanye loves Kanye. We really need to
                      restart the human foundation.
                    </p>
                  </CardBody>
                  <CardFooter profile plain className={classes.justifyContent}>
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

        <div
          className="cd-section"
          style={{ background: "#F9F9F9" }}
          id="citas"
        >
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
              <Card>
                <CardHeader
                  // contact
                  // color="rose"
                  // className={classes.textCenter}
                  style={{
                    background: "#214492",
                    border: "0",
                    padding: "0rem 34px",
                    "margin-top": "-30px",
                    "margin-left": "0px",
                    "margin-right": "0px",
                    "border-radius": "3px",
                  }}
                >
                  <h4 className={classes.title} style={{ color: "white" }}>
                    Citas Bibliográficas
                  </h4>
                </CardHeader>
                {/* <CardBody>


                    
                  </CardBody> */}
                <CardFooter>
                  <GridItem xs={12} sm={6} md={6}>
                    <p>
                      <b>¿Qué tipos de citas deseas?</b>
                    </p>
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
                        style={{
                          background: "#214492",
                        }}
                        className={classes.pullLeft}
                        onClick={() => this.copyCodeToClipboard()}
                      >
                        Copiar
                      </Button>
                    </div>
                  </GridItem>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        <div
          className="cd-section"
          style={{
            background: "linear-gradient(180deg, #001B56 0%, #2F9FA6 200.35%)",
          }}
          id="contactanos"
        >
          <div
            className={classes.container}
            style={{ padding: "20px 18px 70px" }}
          >
            <GridContainer>
              <GridItem style={{ color: "white" }} xs={12} sm={12} md={12}>
                <h3>
                  <b>Contáctanos</b>
                </h3>
                <br />
                <p>
                  Si deseas solicitar la informacion de las muestras,
                  solicitarla por medio de una declaracion jurada, y adjuntarla
                  en tu mensaje.
                </p>
              </GridItem>
              <GridItem style={{ color: "white" }} xs={12} sm={6} md={6}>
                <b>
                  <p style={{ padding: "10px 0px" }}>TU NOMBRE</p>
                </b>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1.3377px solid #F4F4ED",
                    "box-sizing": "border-box",
                    "border-radius": "7px",
                    width: "90%",
                    height: "50px",
                  }}
                />
                <b>
                  <p style={{ padding: "10px 0px" }}>TU EMAIL</p>
                </b>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1.3377px solid #F4F4ED",
                    "box-sizing": "border-box",
                    "border-radius": "7px",
                    width: "90%",
                    height: "50px",
                  }}
                />
                <b>
                  <p style={{ padding: "10px 0px" }}>TU UNIVERSIDAD</p>
                </b>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1.3377px solid #F4F4ED",
                    "box-sizing": "border-box",
                    "border-radius": "7px",
                    width: "90%",
                    height: "50px",
                  }}
                />
              </GridItem>

              <GridItem style={{ color: "white" }} xs={12} sm={6} md={6}>
                <b>
                  <p style={{ padding: "10px 0px" }}>TU MENSAJE</p>
                </b>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1.3377px solid #F4F4ED",
                    "box-sizing": "border-box",
                    "border-radius": "7px",
                    width: "90%",
                    height: "100px",
                  }}
                />
                <br/>
                <br/>
                ADJUNTA CARTA DE SOLICITUD (opcional)
                <br />
                <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
                <div style= {{"text-align": "right"}}>
                  <Button
                    style={{ background: "#F61067" }}
                    // size="lg"
                    // href="https://www.app.geolabaqp.com/"
                    // target="_blank"
                    // rel=""
                  >
                    ENVIAR
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className="cd-section" style={{ background: "#214492" }}>
          <div className={classes.container}>
            <div
              style={{
                padding: "40px 0",
              }}
            />
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <div style={{ "text-align": "center", padding: "20px" }}>
                  <img src={logoTerminos} />
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <div style={{ color: "white" }}>
                  <div>
                    GEOLAB
                    <b>AQP</b>
                  </div>
                  <p>
                    <b>Página web: </b>www.geolabaqp.com
                    <br />
                    <b>Correo electrónico:: </b>contacto@geolabaqp.com
                    <br />
                    <b>Teléfono: </b> 054 - 249745
                    <br />
                    <b>Dirección: </b> Calle Santa Catalina 117 Arequipa, Perú
                  </p>
                  <b>Redes Sociales</b>
                  <br /> Te invitamos a ser parte de nuestra comunidad en
                  nuestras redes sociales:
                  <div>
                    <Button
                      href="#pablo"
                      justIcon
                      simple
                      // color="white"
                      className={classes.btn}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button
                      href="#pablo"
                      justIcon
                      simple
                      // color="white"
                      className={classes.btn}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i class="fab fa-facebook-f" />
                    </Button>
                    <Button
                      href="#pablo"
                      justIcon
                      simple
                      // color="white"
                      className={classes.btn}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      href="#pablo"
                      justIcon
                      simple
                      // color="#214492"
                      className={classes.btn}
                      onClick={(e) => e.preventDefault()}
                    >
                      <i class="fab fa-whatsapp" />
                    </Button>
                  </div>
                  <br />
                  Revise aquí los{" "}
                  <b>
                    <a
                      style={{ color: "white" }}
                      target="_blank"
                      href={process.env.PUBLIC_URL + "terminos.html"}
                    >
                      {" "}
                      terminos y condiciones
                    </a>
                  </b>
                </div>

                <div
                  style={{
                    padding: "10px 0",
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </>
    );
  }
}
// export default withStyles(featuresStyle)(SectionFeatures);
export default withRouter(withStyles(featuresStyle)(SectionFeatures));
