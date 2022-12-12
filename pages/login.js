import React from 'react';
import tw from "tailwind-styled-components"

const login = () => {
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <Title>Log in to access your accout</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default login;

const Wrapper = tw.div`
flex flex-col bg-gray-200 p-4 h-screen w-screen
`

const UberLogo = tw.img`
h-20 w-auto object-contain flex self-start
`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain w-full 
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`