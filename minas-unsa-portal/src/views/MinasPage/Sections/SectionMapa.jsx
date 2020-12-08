import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import userLocationURL from "assets/img/minas/pinMap.svg";

import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Pane,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [80, 80],
  // iconAnchor: [22, 94],
  // popupAnchor: [-2, -90]
});



class MyLayer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.radius === 0) {
      return <LayerGroup/>;
    }
    return (<LayerGroup>
               <Circle center={this.props.latlng} fillColor="red" radius={this.props.radius}/>
            </LayerGroup>);
  }

}



class SectionMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -16.4059138,
      lng: -71.519963,
      lat_wind: -16.406736,
      lng_wind: -71.5229326,
      zoom: 10,
      radius: 0
    };
  }
  openPopup(marker) {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup();
      });
    }
  }


  renderFirst() {
    var result = [];
    for(var i =0; i < 10; i++) {
     result.push(
       <Marker position={[this.state.lat - i*0.1,this.state.lng - i*0.1]} icon={myIcon}>
         <Popup>
           <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
         </Popup>
       </Marker>
    )}
    return result;
  }

  renderSecond() {
   return <MyLayer latlng={[1, 10]} radius={this.state.radius}/>
  }

  render() {
    const icono = {
      color: "#EB1B69",
      float: "left",
      "margin-top": "24px",
      "margin-right": "10px",
    };
    const contenido = {
      overflow: "hidden",
    };
    const titulo = {
      "font-size": "18px",
      color: "#EB1B69",
      margin: "1.75rem 0 0.875rem !important",
      "margin-top": "30px",
      "min-height": "unset",
      "margin-bottom": "5px",
      "text-decoration": "none",
    };
    const info = {
      overflow: "hidden",
      "margin-top": "0px",
    };
    const positionPointer = [this.state.lat_wind, this.state.lng_wind];
    const position = [this.state.lat, this.state.lng];
    const mapstyle = {
      width: "100%",
      height: "850px",
      //   zIndex: 1,
    };
    return (
      <>
        <div>
          <div>
            {/* <MapContainer
            style={mapstyle}
            //   className="markercluster-map"
              center={positionPointer}
              zoom={15}
              maxZoom={50}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer> */}
            <MapContainer
            style={mapstyle}
            center={positionPointer}
            zoom={this.state.zoom}
            // zoomControl={false}
            scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              <LayersControl position="topleft">
                <LayersControl.Overlay checked name="first layer">
                  <LayerGroup>{this.renderFirst()}</LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="second layer">
                  {this.renderSecond()}
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          </div>
        </div>
      </>
    );
  }
}
export default SectionMapa;
