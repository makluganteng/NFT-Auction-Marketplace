import styled from "styled-components"
import Image from "next/image"

const MainContainer = styled.div`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
height:100vh;
color: white;
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@500&display=swap');
font-family: 'Sono', sans-serif;
  font-weight: 500;
`

const ProfileContainer = styled.div`

`

const AddressContainer = styled.div`
width: 100%;

`

const Address = styled.p`
font-size: 20px;
word-break: break-all;
`

const Navigator = styled.div`

`

const NavigatorUl = styled.ul`
list-style-type: none;

`

const NavItem = styled.li`
padding: 20px 0px 20px 0px;
font-size: 30px;
cursor: pointer;
transition: 0.3s ease-in-out;
&:hover {
    transform: scale(1.04);
}

`



const SideBar = () => {
    return(
        <>
        <MainContainer>
            <ProfileContainer>
                <Image src="/nft-auction/public/pfp.jpeg" alt="profile-pic" width={30} height={30} />
                <AddressContainer>
                    <Address>
                    0xcA5185...391731e70
                    </Address>
                </AddressContainer>
            </ProfileContainer>
            <Navigator>
                <NavigatorUl>
                    <NavItem>
                        My NFT
                    </NavItem>
                    <NavItem>
                        Account
                        
                    </NavItem>
                </NavigatorUl>
            </Navigator>
        </MainContainer>
        </>
    )
}

export default SideBar