import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const ButtonModal = styled(Button)`
  color: white;
  font-size: 400px;
  margin: 250px 0px 0px 0px;
  padding: 10px 100px 10px 100px;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const PriceContainer = styled.div`
  margin: 20px 0px 0px 0px;
`;

const PriceLabel = styled.p`
  font-size: 30px;
  margin: 0px 0px 30px 0px;
`;

const DurationContainer = styled.div``;

const DurationLabel = styled.p`
  margin: 30px 0px 30px 0px;
  font-size: 30px;
`;

interface INFTPros {
  tokenId?: string;
  imageUrl?:string;
}


const ModalPop = ({tokenId}:INFTPros) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price,setPrice] = useState<string>('');
  const [hours,setHours] = useState<string>('');
  const router = useRouter()
  

  const convertHours = (hours: number) => {
    let miliseconds: any = hours * 3600000;
    return miliseconds
  }

  const handleOnClick = () => {
    console.log("lol")
    axios.post("/api/auction",{
      token_id: tokenId,
      startingPrice: parseFloat(price),
      hours: convertHours(parseInt(hours))
    }).then((res)=>{
      console.log(res.data)
      if(res.data){
        router.push('/Dashboard')
      }
    }).catch(e=>{
      console.log(e);
    })
  }

  const handleInput = (e) => {
    console.log(e)
    // setPrice(e.target.value)
  }
  return (
    <>
      <ButtonModal
        size="lg"
        bg="black"
        fontSize="40px"
        color="white"
        _hover={{ color: "black", bg: "white" }}
        onClick={onOpen}
      >
        List NFT
      </ButtonModal>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>List NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PriceContainer>
              <PriceLabel>Starting Price (ETH)</PriceLabel>
              <NumberInput defaultValue={0} precision={2} step={0.01}>
                <NumberInputField onChange={(event)=>{setPrice(event.target.value)}}/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </PriceContainer>
            <DurationContainer>
              <DurationLabel>Duration Auction</DurationLabel>
              <Input placeholder="Hours" size="lg" onChange={(event)=>{
                console.log(event)
                setHours(event.target.value)}}/>
            </DurationContainer>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" onClick={()=>{handleOnClick()}}>List NFT</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPop;
