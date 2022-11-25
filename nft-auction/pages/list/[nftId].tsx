import { NextPage } from "next"
import Image from "next/image"
import styled from "styled-components"
import MainBar from "../components/mainbar"
import { NFT } from "../components/myNft"
import SideBar from "../components/sidebar"
import Header from "../components/header";
import ModalPop from "../components/Modal"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import Countdown from "react-countdown"

const MainContainer = styled.div`
    padding: 100px;
    display: flex;
`

const ImageContainer = styled.div`

`

const SecondContainer = styled.div`
    margin: 0px 0px 0px 50px;

`
const Nftname = styled.p`
    color: white;
    font-size: 100px;
`

const NftOwner = styled.p`
    color: white;
    font-size: 40px;
    margin: 30px 0px 0px 0px;
`

const ButtonList = styled.button`
    color: white;
    font-size: 40px;
    background-color: black;
    margin: 250px 0px 0px 0px;
    padding: 10px 100px 10px 100px;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.04);
    }
`

const Container = styled.div`
  display: flex;
`

const Price = styled.p`
color: white;
    font-size: 70px;
    margin: 30px 0px 0px 0px;
`

const Button = styled.button`
color: white;
    font-size: 40px;
    background-color: black;
    margin: 250px 0px 0px 0px;
    padding: 10px 100px 10px 100px;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.04);
    }
`

const Count = styled.div`
color: white;
font-size: 30px;
`

interface INFTPros {
    tokenId?: string;
    imageUrl?:string;
}

const ListDetails = ({tokenId, imageUrl}: INFTPros) => {
    const router = useRouter();
    const {nftId} = router.query
    const [price,setPrice] = useState(0)
    const [seconds,setSeconds] = useState(0)
    const [finish,setFinish] = useState(true)

    useEffect(()=>{
        axios.get("/api/auction").then((res)=>{
            console.log(res.data)
            setPrice(res.data[0].startingPrice)
            setSeconds(res.data[0].hours)
        })
    },[])

    const handleOnClick = () => {
        let newestPrice = price + 0.5;
        setPrice(newestPrice)
    }
    return(
        <>
        <Header/>
            <Container>
                <SideBar/>
                <MainBar>
                    <MainContainer>
            <ImageContainer>
                <Image src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVkhZYAAACui2Hw8PAyjv39MzOgsbnGxsYfKzAqKipMOyhpipz6+vq4lGlLS0taeYm+oYMSFxqef1iOclCDm6ejtLz18+5Il/z7SUvu9vY6TFZAQEDPz88sOEAhISFlh5hSbXviWiZcgJNpj59IXmt8Y0X+9+57sPknif2bwPbx3+D+ICFlUDg3LCAeGBH///+MjIzgZjgnDwdoaGijo6OCNRhFHgruXymEtvf6P0AAAAQMEA4QFxwbIiVBVmQcHBwgGBQxJhUVDABnYFlYVVKmt711dXVOSEBLGgKzimQ/OS9ASVJxXkMnNTq13h3MAAADmklEQVR4nO3dDVPaMACAYZlO0coQUTd1EAbidH7NzX0IOve9uc3//3c2jyZ0tNS2NE0M73vn6Z1cyXPRC7SlnZkhIiIiIiIiIiIiIqLpS0yaZ1pwV/3aRF3UGrYTS5PW6JgmxCUQIkRoPISJhHauFsKT5TCHgw11rJKK1pZMjbR/5ddPJ7xUmzKtCiS8nfBIm4t+zVTA3vBH06xgUcKrbMJAplXBECJEaD53hcL/nuNqESUU0c9eQKIq+xAe3+RzqLZujCg65fCwpGsx5UuZuHaMvYDzECJEiBBh5vzlSRQvLGhhFHI/Q2HrYUfuIymGKKplWS88mr4sP2DpUj5fUXupqjkOPl1lhAgRIkSIECFChAgRIkSIECFChAgRIkSIEKFO4XFX9tlR4VFF9tFZ4QO/Y4QIESJEmFH4SQnv4Xq4/ShBX1ZkX5M8PKJG+EwFT+vnTobChZPlJG0OSvTYiE7WRehsk/n1Qd/W2nqFs0W0PK8UEijm/dbXNABNClUIESKcIuGy+0K/0UFt3H7FpB64GdOGBUL5uZjm95NR4+77x2Ob25eDf3H+ZGznNsyh6nVY+Hxvblx7+7tSePBwbAcIESJEiNA54eja75pw+6XMVeEwhAgRIkSIEGFA6Nh7/FGhM/tpYuYwxxAiRIhwOoQ914XBSyvMqsP2kxU8jm+D8Gi17reSX+pcjFb4ahiF/x8uqXNmckxtPeLqLQgRIkToirDnqlDkMIeVUFYJ2zcNv3424XW9G2rVIuHtyZ1+5WzCymH4r6BulVBJXRcK54XuzyFChAinWtgeCnV8GmFiYcLi5rCgECJEiBAhwmKF4f0alaGwMzZPLz5HYeVwKZQSlhvj0zu/eQqPStna0nqrPZ3CXi/icuhOCRPPoft/pQgRIjQv7MgbetsgrMf0YztVb/1+PmrJbBDG3dXj7GmqTt/5vZEb6OuYxLTCuKu3nC2k6vTZoKGwhhAhQoQI3RDmuh6OCm1YD69XY/rVTNPlK9nvtrxbqQXCf8axv5l4L4Ydr0tj4r0FQoQIESJMUPfQb3i4YitJEZ/FsFSojjh1ldBLkt5br+o4fhgQah17shAiRGg+hFMjjHtrH+7PRe22i1rfNG8mqbBeSlVjcDBJ91qeLE1C06xACBEiNB/CDMKe88JS6cbYyaQRpRXutBJUNa0KllZY9cTdmUb9V2qh6QGnDiFC+0OI0P4QIrQ/hAjtDyFC+7s/wr+GG6DXPBA4jgAAAABJRU5ErkJggg=="} alt="dadw" width={800} height={800} />
            </ImageContainer>
            <SecondContainer>
                <Nftname>Token: {nftId}</Nftname>
                <NftOwner>0xcA51855...9995DE391731e70</NftOwner>
                <Price>Price: {price}</Price>
                <Count>
                    <Countdown date={Date.now() + 1000} onComplete={()=>{console.log("success")}}>
                        <p>Auction Finished</p>
                    </Countdown>
                </Count>
                <Button onClick={handleOnClick}>Bid + 0.5</Button>
            </SecondContainer>
        </MainContainer>
                </MainBar>
            </Container>
            </>
    )
}

export default ListDetails