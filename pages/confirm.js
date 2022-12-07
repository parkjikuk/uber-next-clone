import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';

const Confirm = () => {
  const router = useRouter()
  const {pickup, dropoff} = router.query

  const [ pickupCoordinates, setPickupCoordinates] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = () => {
    const pickup = "seoul";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFya2pheSIsImEiOiJjbGI3MjVlaGIwNnk0M3RydnMzeGgyc2NoIn0.lRA8nUxA0ILyB6qkhVyPLA",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center);
    })
  }

  const getDropoffCoordinates = () => {
    const dropoff = "bucheon";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFya2pheSIsImEiOiJjbGI3MjVlaGIwNnk0M3RydnMzeGgyc2NoIn0.lRA8nUxA0ILyB6qkhVyPLA",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center);
    })
  }

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, [])

  return (
    <Wrapper>
      <Map 
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
        Ride Selector
        Confirm Button
        
      </RideContainer> 
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen 
`

const RideContainer = tw.div`
flex-1
`