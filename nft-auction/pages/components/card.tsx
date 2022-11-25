import axios from "axios";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NFT } from "./myNft";
import { getTokenURI } from "./Utils/utils";
import Image from "next/image";

const MainCardContainer = styled.div`
    height: 300px;
    width: 250px;
    background-color: white;
    margin: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.04);
    }
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
interface INFTPros {
    tokenId?: string;
    imageUrl?:string;
}

const Card = ({ tokenId, imageUrl }: INFTPros) => {

    const [name, setName] = useState<string>('');
    const router = useRouter();
    const [id,setId] = useState<string>("")

    useEffect(()=>{
        console.log(tokenId)
    })

    const handleOnCLick = () => {
        router.push(`/nft/${tokenId}`)
    }

    return(
        <>
        <MainCardContainer onClick={()=>{handleOnCLick()}}>
            <ImageContainer>
                {imageUrl ? <Image src={imageUrl} alt={''} style={{ width: '100%', height: '100%', background: 'none' }} width={100} height={100}/> : <></>
                }
            </ImageContainer>
            <DetailContainer>
                <Name>Token: {tokenId}</Name>
            </DetailContainer>
        </MainCardContainer>
        </>
    )
}

export default Card;