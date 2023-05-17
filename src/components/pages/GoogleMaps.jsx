import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

function GoogleMaps(props) {
  const defaultCenter = {
    lat: 14.5995,
    lng: 120.9842,
  };

  const [userLocation, setUserLocation] = useState(null);

  function handleGetUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);
        },
        function () {
          alert("Error: The Geolocation service failed.");
        }
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  }

  const markers = [];
  if (userLocation) {
    markers.push(
      <Marker
        key="https://maps.googleapis.com/maps/api/js?key=${AIzaSyD2R3LDm5jmU1SCGT7e8U1-rGjba0QjlRc}&callback=initMap"
        lat={userLocation.lat}
        lng={userLocation.lng}
        text="You are here"
      />
    );
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact defaultCenter={defaultCenter} defaultZoom={12}>
        {markers}
      </GoogleMapReact>
      <button onClick={handleGetUserLocation}>Get my location</button>
    </div>
  );
}

function Marker(props) {
  return (
    <div
      style={{
        color: "white",
        background: "red",
        padding: "10px 15px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
      lat={props.lat}
      lng={props.lng}
    >
      {props.text}
    </div>
  );
}

export default GoogleMaps;
