import {
  Input,
  Button,
  Heading,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { abi, CONTRACT_ADDRESS } from "../../constants";
import { BytesLike, ethers } from "ethers";
import styled from "styled-components";
import QRCode from "react-qr-code";

const MainContainer = styled.div`
    background-color: black
    color: white;
    display: block;
    margin: 20px 20px 20px 20px;
    
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.h1`
  color: black;
  margin: 0px 0px 0px 20px;
  font-size: 16px;
`;

const Padding = styled.div`
  padding: 10px 10px 10px 10px;
`;
export default function Verify() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const [bidderContract, setBidderContract] = useState<any>(null);
  const inputRef = useRef<any>("");
  const router = useRouter();

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(API_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY as BytesLike, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    setBidderContract(contract);
  }, []);

  // create toastMessage type
  type toastMessageType = {
    title: string;
    description: string;
    status: "success" | "error" | "warning" | "info" | undefined;
  };
  const [toastMessage, setToastMessage] = useState<toastMessageType>();
  const toast = useToast();

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

  // more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
  const qrProofRequestJson = {
    id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
    typ: "application/iden3comm-plain-json",
    type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
    body: {
      transaction_data: {
        contract_address: CONTRACT_ADDRESS,
        method_id: "b68967e2",
        chain_id: 80001,
        network: "polygon-mumbai",
      },
      reason: "Auction Participation",
      scope: [
        {
          id: 1,
          circuit_id: "credentialAtomicQuerySig",
          rules: {
            query: {
              allowed_issuers: ["*"],
              req: {
                birthday: {
                  $lt: 20010101,
                },
              },
              schema: {
                url: "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v2.json-ld",
                type: "KYCAgeCredential",
              },
            },
          },
        },
      ],
    },
  };

  async function onSubmitAddress() {
    await bidderContract
      .addressToId(inputRef.current.value)
      .then((res: any) => {
        console.log(`Response: ${res.toString()}`);
        console.log(`Response any: ${res}`);
        if (res._hex != "0x00") {
          setToastMessage({
            title: "Success",
            description: "Address is registered",
            status: "success",
          });
          router.push("/Dashboard");
        } else {
          setToastMessage({
            title: "Address not registered",
            description: "Please register your address first",
            status: "error",
          });
        }
      })
      .catch(() => {
        setToastMessage({
          title: "Invalid address",
          description: "Please enter a valid address first",
          status: "error",
        });
      });
  }

  return (
    <>
      <MainContainer>
        <TitleContainer>
          <Title>Use Polygon ID to submit KYC claim</Title>
        </TitleContainer>
        <Padding />
        <QRCode
          level="Q"
          style={{ width: 256, marginLeft: 20 }}
          value={JSON.stringify(qrProofRequestJson)}
        />
        <Padding />
        <Input
          ref={inputRef}
          placeholder="Enter your verified wallet address"
          size="md"
          maxLength={42}
          fontSize={15}
        />
      </MainContainer>
      <Padding />
      <Button
        colorScheme={"blue"}
        variant={"solid"}
        onClick={onSubmitAddress}
        style={{ position: "relative", left: "70%" }}
      >
        Submit
      </Button>
    </>
  );
}
