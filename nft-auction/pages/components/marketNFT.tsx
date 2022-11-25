import axios from "axios";
import { NextPage } from "next";
import { version } from "os";
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

export type NFTProp = {
  token_id: string
  startingPrice: number
  hours: number
};

const MarketNFT = () => {
  const [nft, setNft] = useState<Array<NFTProp>>();
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    axios.get(`/api/auction`).then((res)=>{
      setNft(res.data)
      console.log(res)
    })
    console.log(nft)
    // axios.get("https://api-dev.reddio.com/v1/balances?stark_key=0xfc58edf6c73e3e239689958ddb5c7e4ccc122feacfae4156f46b464c27f984ff6d9b9f202e3fd80bf84fdb95e773f43114f8f13a1cb0bd1f0450ca2abcfe").then((res)=>{
    //   setNft(res.data.data.list)
    //   console.log(res.data.data.list)
    // })
    axios.get("https://metadata.reddio.com/api/tokens/1").then((res)=>{
      console.log(res.data)
      setImage(res.data.image)
    })
    // console.log(nft);
  }, []);


    return(
        <>
        <MainContainer>
            <TitleContainer>
                <Title>Market</Title>
            </TitleContainer>
            <NftContainer>
              { 
              nft ? <CardContainer>
                      <Card tokenId={nft[0].token_id} imageUrl={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVkhZYAAACui2Hw8PAyjv39MzOgsbnGxsYfKzAqKipMOyhpipz6+vq4lGlLS0taeYm+oYMSFxqef1iOclCDm6ejtLz18+5Il/z7SUvu9vY6TFZAQEDPz88sOEAhISFlh5hSbXviWiZcgJNpj59IXmt8Y0X+9+57sPknif2bwPbx3+D+ICFlUDg3LCAeGBH///+MjIzgZjgnDwdoaGijo6OCNRhFHgruXymEtvf6P0AAAAQMEA4QFxwbIiVBVmQcHBwgGBQxJhUVDABnYFlYVVKmt711dXVOSEBLGgKzimQ/OS9ASVJxXkMnNTq13h3MAAADmklEQVR4nO3dDVPaMACAYZlO0coQUTd1EAbidH7NzX0IOve9uc3//3c2jyZ0tNS2NE0M73vn6Z1cyXPRC7SlnZkhIiIiIiIiIiIiIqLpS0yaZ1pwV/3aRF3UGrYTS5PW6JgmxCUQIkRoPISJhHauFsKT5TCHgw11rJKK1pZMjbR/5ddPJ7xUmzKtCiS8nfBIm4t+zVTA3vBH06xgUcKrbMJAplXBECJEaD53hcL/nuNqESUU0c9eQKIq+xAe3+RzqLZujCg65fCwpGsx5UuZuHaMvYDzECJEiBBh5vzlSRQvLGhhFHI/Q2HrYUfuIymGKKplWS88mr4sP2DpUj5fUXupqjkOPl1lhAgRIkSIECFChAgRIkSIECFChAgRIkSIEKFO4XFX9tlR4VFF9tFZ4QO/Y4QIESJEmFH4SQnv4Xq4/ShBX1ZkX5M8PKJG+EwFT+vnTobChZPlJG0OSvTYiE7WRehsk/n1Qd/W2nqFs0W0PK8UEijm/dbXNABNClUIESKcIuGy+0K/0UFt3H7FpB64GdOGBUL5uZjm95NR4+77x2Ob25eDf3H+ZGznNsyh6nVY+Hxvblx7+7tSePBwbAcIESJEiNA54eja75pw+6XMVeEwhAgRIkSIEGFA6Nh7/FGhM/tpYuYwxxAiRIhwOoQ914XBSyvMqsP2kxU8jm+D8Gi17reSX+pcjFb4ahiF/x8uqXNmckxtPeLqLQgRIkToirDnqlDkMIeVUFYJ2zcNv3424XW9G2rVIuHtyZ1+5WzCymH4r6BulVBJXRcK54XuzyFChAinWtgeCnV8GmFiYcLi5rCgECJEiBAhwmKF4f0alaGwMzZPLz5HYeVwKZQSlhvj0zu/eQqPStna0nqrPZ3CXi/icuhOCRPPoft/pQgRIjQv7MgbetsgrMf0YztVb/1+PmrJbBDG3dXj7GmqTt/5vZEb6OuYxLTCuKu3nC2k6vTZoKGwhhAhQoQI3RDmuh6OCm1YD69XY/rVTNPlK9nvtrxbqQXCf8axv5l4L4Ydr0tj4r0FQoQIESJMUPfQb3i4YitJEZ/FsFSojjh1ldBLkt5br+o4fhgQah17shAiRGg+hFMjjHtrH+7PRe22i1rfNG8mqbBeSlVjcDBJ91qeLE1C06xACBEiNB/CDMKe88JS6cbYyaQRpRXutBJUNa0KllZY9cTdmUb9V2qh6QGnDiFC+0OI0P4QIrQ/hAjtDyFC+7s/wr+GG6DXPBA4jgAAAABJRU5ErkJggg=="} />
                    </CardContainer> : <></>
              //  nft.map((value: NFTProp, key)=>{
              //       return(
              //           <CardContainer key={key}>
              //                   <Card tokenId={value.token_id} imageUrl={image} />
              //           </CardContainer>
              //       )
              //   }) : <></>
            }  
            </NftContainer>
        </MainContainer>
        </>
    )
}


export default MarketNFT;
