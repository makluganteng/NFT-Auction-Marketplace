import styled from "styled-components";
const MainContainer = styled.div`
    background-color: black
    color: white;
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: white;
  margin: 0px 0px 0px 40px;
  font-size: 50px;
`;

const Body = styled.h1`
  color: white;
  margin: 0px 0px 0px 40px;
  font-size: 40px;
`;

const Account = () => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <Title>My Account</Title>
        </TitleContainer>
        <Body>
          <li>Account #1</li>
          <li>Account #2</li>
        </Body>
      </MainContainer>
    </>
  );
};

export default Account;
