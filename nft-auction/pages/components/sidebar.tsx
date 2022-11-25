import styled from "styled-components";
import Image from "next/image";
import { ethers } from "ethers";
import { initReddio, isVercel, reddio } from "./Utils/config";
import { useCallback, useEffect, useState } from "react";
import { getEthAddress } from "./Utils/utils";
import { addStarkKey } from "./Utils/store";

const MainContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
  @import url("https://fonts.googleapis.com/css2?family=Sono:wght@500&display=swap");
  font-family: "Sono", sans-serif;
  font-weight: 500;
`;

const ProfileContainer = styled.div``;

const AddressContainer = styled.div`
  width: 100%;
`;

const Address = styled.p`
  font-size: 20px;
  word-break: break-all;
`;

const Navigator = styled.div``;

const NavigatorUl = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 20px 0px 20px 0px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

declare var window: any;

const SideBar = () => {
  const [address, setAddress] = useState("");

  const getAddress = useCallback(async () => {
    setAddress(await getEthAddress());
  }, []);

  const connect = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("wallet_switchEthereumChain", [
      { chainId: ethers.utils.hexValue(isVercel ? 1 : 5) },
    ]);
    await provider.send("eth_requestAccounts", []);
    await getAddress();
    const init = async () => {
      initReddio();
      const { publicKey, privateKey } =
        await reddio.keypair.generateFromEthSignature();
      console.log(publicKey, privateKey);
      addStarkKey(publicKey);
    };
    init();
  }, []);

  useEffect(() => {
    connect();
  });

  return (
    <>
      <MainContainer>
        <ProfileContainer>
          <Image
            src="/nft-auction/public/pfp.jpeg"
            alt="profile-pic"
            width={30}
            height={30}
          />
          <AddressContainer>
            <Address>
              {address.slice(0, 4)}...{address.slice(-4)}
            </Address>
          </AddressContainer>
        </ProfileContainer>
        <Navigator>
          <NavigatorUl>
            <NavItem>My NFT</NavItem>
            <NavItem>Account</NavItem>
          </NavigatorUl>
        </Navigator>
      </MainContainer>
    </>
  );
};

export default SideBar;
