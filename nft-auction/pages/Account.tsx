import { NextPage } from "next";
import AccountList from "./components/accountList";
import Header from "./components/header";
import MainBar from "./components/mainbar";
import SideBar from "./components/sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Account: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <MainBar children={<AccountList />}/>
        
      </Container>
      
    </>
  );
};

export default Account;
