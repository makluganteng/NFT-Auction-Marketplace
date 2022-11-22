import styled from "styled-components"
import Link from 'next/link'

const MainContainer = styled.div`
width: 100%;
background-color: black;
display: flex;
justify-content: space-around;
padding: 30px 0px 30px 0px;
font-size: 25px;
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@500&display=swap');
font-family: 'Sono', sans-serif;
  font-weight: 500;
`

const TitleContaier = styled.div`

`

const Title = styled.p`
color: white;

`

const MenuContainer = styled.div`

`

const MenuItemContainer = styled.ul`
display: flex;
list-style-type: none;

`

const MenuItem = styled.li`
color: white;
margin: 0px 10px 0px 10px;
transition: 0.3s ease-in-out;
&:hover {
    transform: scale(1.04);
}
`

const Item = styled(Link)`
color:inherit;
text-decoration:none;
`


const Header = () => {
    return (
        <>
            <MainContainer>
                <TitleContaier>
                    <Title>
                        LepakAuction
                    </Title>
                </TitleContaier>
                <MenuContainer>
                    <MenuItemContainer>
                        <MenuItem>
                        <Item href={"/"} onClick={()=>console.log("wtf")}>Home</Item>
                        </MenuItem>
                        <MenuItem>
                        <Item href="/account">Account</Item>
                        </MenuItem>
                        <MenuItem>
                        <Item href="/market">Market</Item>
                        </MenuItem>
                    </MenuItemContainer>
                </MenuContainer>
            </MainContainer>
        </>
    )
}

export default Header