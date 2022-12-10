import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter()
  const {pickup, dropoff} = router.query

  const [ pickupCoordinates, setPickupCoordinates] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = (pickup) => {
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

  const getDropoffCoordinates = (dropoff) => {
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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" legacyBehavior>
          <BackButton src="https://i.postimg.cc/ncKGTfGs/return-button-png-26.png" />
        </Link>
      </ButtonContainer>
      <Map 
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm UberX
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer> 
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen 
`

const ButtonContainer = tw.div`
rounded-full absolute z-10 top-4 left-4 cursor-pointer shadow-md bg-white
`

const BackButton = tw.img`
h-12
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`