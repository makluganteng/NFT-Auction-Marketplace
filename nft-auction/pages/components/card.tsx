import { useEffect } from "react";
import styled from "styled-components";
import { NFT } from "./myNft";

const MainCardContainer = styled.div`
    height: 300px;
    width: 250px;
    background-color: white;
    margin: 10px;
`

const ImageContainer = styled.div`

`

const DetailContainer = styled.div`
    color: black;
    
`

const Name = styled.p`

`

const Price = styled.div`

`

const Card = (nft: NFT) => {
useEffect(()=>{
    console.log(nft.nft.name);
})

    return(
        <>
        <MainCardContainer>
            <ImageContainer>

            </ImageContainer>
            <DetailContainer>
                <Name>{nft.nft.name}</Name>
                {
                    nft.nft.price ? <Price>{nft.nft.price}</Price> : <></>
                }
            </DetailContainer>
        </MainCardContainer>
        </>
    )
}

export default Card;