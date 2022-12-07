import React from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';

mapboxgl.accessToken = "pk.eyJ1IjoicGFya2pheSIsImEiOiJjbGI3MjVlaGIwNnk0M3RydnMzeGgyc2NoIn0.lRA8nUxA0ILyB6qkhVyPLA";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [127, 37],
      zoom: 7,
    });

    if(props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 80
        })
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  return (
    <Wrapper id="map"></Wrapper>
  );
};

export default Map;

const Wrapper = tw.div`
flex-1
`