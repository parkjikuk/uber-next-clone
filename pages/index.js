import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import Map from './components/Map'
import Link from 'next/link';
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if(user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('./login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
          <Profile>
            <SignOut onClick={() => signOut(auth)}>로그아웃</SignOut>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" legacyBehavior>
            <ActionButton>
              <ActionButtonImage src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"/>
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://ifh.cc/g/1FsNvn.png"/>
            Wheels
            </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://ifh.cc/g/8cDF6K.png"/>
            Reserve
            </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`


const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-28
`

const SignOut = tw.button`
bg-black text-white mr-4 p-2 rounded-full
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
