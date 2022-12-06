import Link from 'next/link';
import React from 'react';
import tw from "tailwind-styled-components"

const search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/" legacyBehavior>
          <BackButton src="https://i.postimg.cc/ncKGTfGs/return-button-png-26.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://i.postimg.cc/FK0kG9zC/639ff23f2fa0d07258f8d6290136d918-removebg-preview-11zon.png" />
          <Line src="https://i.postimg.cc/PrptjSH1/png-transparent-rectangle-line-vertical-line-angle-white-rectangle-thumbnail-removebg-preview.png" />
          <Square src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/stop-block-cube-music-square-512.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="출발 장소" />
          <Input placeholder="어디로 가실건가요?"/>
        </InputBoxes>
        <PlusIcon src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/add-64.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://cdn3.iconfinder.com/data/icons/lightly-icons/30/652865-star-add-60.png" />
        Saved Places
      </SavedPlaces>
      <Link href="/confirm">
        <ConfirmLocation>
          Confirm Location
        </ConfirmLocation>
      </Link>
    </Wrapper>
  );
};

export default search;


const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 ml-3 bg-gray-200 rounded-full
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocation = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`
