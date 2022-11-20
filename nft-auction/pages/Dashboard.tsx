import { NextPage } from "next";
import Header from "./components/header";
import MainBar from "./components/mainbar";
import SideBar from "./components/sidebar";
import styled from "styled-components";


const Container = styled.div`
display: flex;
`

const Dashboard: NextPage = () => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <MainBar />
            </Container>
        </>
    )
}

export default Dashboard;