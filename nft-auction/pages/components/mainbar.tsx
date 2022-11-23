import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #282a3a;
  width: 100%;
  height: 100vh;
`;

const MainBar = (props: any) => {
  return (
    <>
      <MainContainer>{props.children}</MainContainer>
    </>
  );
};

export default MainBar;