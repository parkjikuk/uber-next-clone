import React from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';

mapboxgl.accessToken = "pk.eyJ1IjoicGFya2pheSIsImEiOiJjbGI3MjVlaGIwNnk0M3RydnMzeGgyc2NoIn0.lRA8nUxA0ILyB6qkhVyPLA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-99.9, 39.35],
      zoom: 4,
    });
  });

  return (
    <Wrapper id="map">
      
    </Wrapper>
  );
};

export default Map;

const Wrapper = tw.div`
flex-1
`