import Header from "./components/header";
import MainBar from "./components/mainbar";
import styled from "styled-components";
import LoginModal from "./components/loginModal";

const Container = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <MainBar>
          <LoginModal />
        </MainBar>
      </Container>
    </>
  );
}
