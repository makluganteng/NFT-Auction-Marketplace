import { NextPage } from "next";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Card from "./card";

const MainContainer = styled.div`
    background-color: black
    color: white;
    display: flex;
    flex-direction: column;
`

const CardContainer = styled.div``;

const TitleContainer = styled.div`
display: flex;

`

const Title = styled.h1`
color: white;
margin: 0px 0px 0px 40px;
font-size: 50px;
`

const NftContainer = styled.div`
display: flex;
margin: 0px 0px 0px 30px;
`

export type NFT = {
  name: string;
  price: string;
};

const MyNft = () => {
  const [nft, setNft] = useState<Array<NFT>>();

  useEffect(() => {
    setNft([
      { name: "LALA", price: "" },
      { name: "Stark", price: "" },
      { name: "heyoNFT", price: "" },
    ]);
    console.log(nft);
  }, []);

    return(
        <>
        <MainContainer>
            <TitleContainer>
                <Title>My NFT</Title>
            </TitleContainer>
            <NftContainer>
              {
               nft ? nft.map((value: NFT, key)=>{
                    return(
                        <CardContainer key={key}>
                                <Card name={value.name} price={value.price} />
                        </CardContainer>
                        
                    )
                }) : <></>
            }  
            </NftContainer>
        </MainContainer>
        </>
    )
}


export default MyNft;
