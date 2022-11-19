import styled from "styled-components"

const MainContainer = styled.div`
width: 100%;
background-color: black;
display: flex;
justify-content: space-around;
padding: 30px 0px 30px 0px;
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
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Account</MenuItem>
                        <MenuItem>Market</MenuItem>
                    </MenuItemContainer>
                </MenuContainer>
            </MainContainer>
        </>
    )
}

export default Header