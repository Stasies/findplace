import React, { useState } from "react";
import Map from "./Map";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Place from "@mui/icons-material/Place";
import { countries } from "./countriesData";
import { HomeContainer, InfoWrapper, MapWrapper } from "./HomeElements";

const Home = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const containerStyle = {
    width: "60%",
    height: "50vh",
    marginLeft: "20%",
    border: "solid 5px #d3d3d3",
  };

  const randomPlace = () => {
    // function getLat(min, max) {
    //   setLatitude(Math.random() * (max - min) + min);
    // }
    // function getLong(min, max) {
    //   setLongitude(Math.random() * (max - min) + min);
    // }
    // getLat(-36, 82);
    // getLong(-180, 180);
    let getCountry = countries[Math.round(Math.random() * countries.length)];

    setLongitude(getCountry.lon);
    setLatitude(getCountry.lat);
    console.log(latitude, longitude);
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA7XES0wC9tCXu11zN08XqTHnz3lt3eezc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <HomeContainer>
        <h1>Куда отправиться</h1>
        <p>Не знаете куда поехать? Мы нашли решение!</p>
        <MapWrapper>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Map />
          </GoogleMap>
        </MapWrapper>
        <InfoWrapper>
          <div className="other">
            <button onClick={() => randomPlace()}>Найти</button>
          </div>
        </InfoWrapper>
      </HomeContainer>
    </>
  ) : (
    <></>
  );
};

export default Home;
