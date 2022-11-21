import { NextPage } from "next"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from "styled-components"
import Card from "./card"

const MainContainer = styled.div`
    background-color: black
    color: white;
    display: flex;
    
`

const CardContainer = styled.div`

`

export type NFT = {
    name: string
    price: string
}

const MyNft = () => {

    const[nft,setNft] = useState<Array<NFT>>()

    useEffect(()=>{
        setNft([{name: "LALA",price: ""},{name: "Stark", price: ""},{name:"heyoNFT", price: ""}])
        console.log(nft)
    },[])

    return(
        <Route>
        <MainContainer>
            {
               nft ? nft.map((value: NFT, key)=>{
                    return(
                        <CardContainer key={key}>
                                <Card name={value.name} price={value.price}/>
                        </CardContainer>
                        
                    )
                }) : <></>
            }
        </MainContainer>
        </Route>
    )
}

export default MyNft