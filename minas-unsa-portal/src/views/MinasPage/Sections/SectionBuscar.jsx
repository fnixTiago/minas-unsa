import React, { Component } from 'react'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { CardContent, Card, CardHeader, Typography } from "@material-ui/core";
import image1 from "assets/img/bg.jpg";
import ReactPaginate from "react-paginate";

class SectionBuscar extends Component {
    render() {
        return (
            <>
                  <GridContainer>
                        <GridItem
                          xs={8}
                          sm={8}
                          md={8}
                          style={{
                            "font-family": "Proxima Nova",
                            "font-style": "normal",
                            "font-weight": "bold",
                            "font-size": "20px",
                            "line-height": "100%",
                          }}
                        >
                          <b>Muestras</b>
                        </GridItem>
                        <GridItem xs={4} sm={4} md={4}>
                          <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={Math.ceil(90 / 9)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={this.ButtonPaginationL}
                            containerClassName={"paginando"}
                            activeClassName={"active"}
                          />
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={6}
                          md={4}
                          style={{ padding: "15px" }}
                        >
                          <Card
                            style={{
                              position: "static",

                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <CardContent>
                              <div>
                                <img
                                  src={image1}
                                  width="100%"
                                  style={{
                                    "border-radius": "6px",
                                  }}
                                />
                              </div>
                              <div style={{ "padding-top": "8px" }}>
                                <Typography
                                  style={{
                                    fontSize: "14",
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "10px",
                                    "line-height": "100%",
                                  }}
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  Localización
                                </Typography>
                                <Typography
                                  style={{
                                    "font-family": "Proxima Nova",
                                    "font-style": "normal",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "line-height": "100%",
                                  }}
                                >
                                  <b>Chipmo</b> - en{" "}
                                  <b style={{ color: "#214492" }}>
                                    R.C. Veta Prosperidad
                                  </b>
                                </Typography>
                              </div>
                            </CardContent>
                          </Card>
                        </GridItem>
                      </GridContainer>
                   
            </>
        )
    }
}
export default  SectionBuscar