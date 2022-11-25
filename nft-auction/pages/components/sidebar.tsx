import styled from "styled-components";
import Image from "next/image";
import { ethers } from "ethers";
import { initReddio, isVercel, reddio } from "../../Utils/config";
import { useCallback, useEffect, useState } from "react";
import { getEthAddress } from "../../Utils/utils";
import { addStarkKey } from "../../Utils/store";
import { useAppPersistStore } from "../../store/app";
import { Button, useToast, Stack } from "@chakra-ui/react";

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

const ComponentContainer = styled.div`
  margin: 10px 10px 10px 10px;
`;

const Address = styled.p`
  font-size: 16px;
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

// create toastMessage type
type toastMessageType = {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info" | undefined;
};

const SideBar = () => {
  const toast = useToast();
  const [toastMessage, setToastMessage] = useState<toastMessageType>();

  const [address, setAddress] = useState("");
  const signerAddress = useAppPersistStore((state) => state.signerAddress);
  const setSignerAddress = useAppPersistStore(
    (state) => state.setSignerAddress
  );

  const getAddress = useCallback(async () => {
    setAddress(await getEthAddress());
  }, []);

  const connect = useCallback(async () => {
    // get current value
    const signerAddressVal = signerAddress;
    console.log(`signerAddressVal: ${signerAddressVal}`);
    if (signerAddressVal == "") {
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
      // set val to persiststore
      setSignerAddress(address);
      setToastMessage({
        title: "Logged In",
        description: "User has logged out",
        status: "success",
      });
    } else {
      console.log(`user logged in: ${address}`);
    }
  }, []);
  useEffect(() => {
    if (toastMessage) {
      const { title, description, status } = toastMessage;
      toast({
        title,
        description,
        status: status,
        duration: 2000,
        isClosable: true,
      });
    }
  }, [toastMessage, toast]);

  const logout = () => {
    setSignerAddress("");
    setAddress("");
    setToastMessage({
      title: "Logged Out",
      description: "User has logged out",
      status: "success",
    });
  };

  return (
    <>
      <MainContainer>
        <ProfileContainer>
          {address && (
            <>
              <ComponentContainer>
                <img src="/pfp.jpeg" />
                <AddressContainer>
                  <Address>
                    {address.slice(0, 4)}...{address.slice(-4)}
                  </Address>
                </AddressContainer>
              </ComponentContainer>
            </>
          )}
        </ProfileContainer>
        <Stack spacing={4} direction="column" align="center">
          <Button bgColor="blue.400" color="white" onClick={connect}>
            Sign In
          </Button>
          <Button bgColor="red" color="white" onClick={logout}>
            Sign Out
          </Button>
        </Stack>
      </MainContainer>
    </>
  );
};

export default SideBar;
