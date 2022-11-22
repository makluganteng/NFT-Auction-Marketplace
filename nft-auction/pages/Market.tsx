import { NextPage } from "next";
import Header from "./components/header";
import MainBar from "./components/mainbar";
import SideBar from "./components/sidebar";
import styled from "styled-components";
import MarketNFT from "./components/marketNFT";

const Container = styled.div`
display: flex;
`

const Market: NextPage = () => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <MainBar children={<MarketNFT/>}/>
            </Container>
        </>
    )
}

export default Market;