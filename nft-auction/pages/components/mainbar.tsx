import styled from "styled-components";
import MyNft from "./myNft";

const MainContainer = styled.div`
background-color: #282A3A;
width: 100%;
height: 100vh;
`

const MainBar = () => {
    return(
        <>
        <MainContainer>
            <MyNft/>
        </MainContainer>
        </>
    )
}

export default MainBar;