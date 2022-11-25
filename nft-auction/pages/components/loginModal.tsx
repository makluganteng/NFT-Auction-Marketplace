import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Verify from "./verify";
import { useState } from "react";
const LoginModal = (props: any) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal
        // force modal to be opened
        closeOnOverlayClick={false}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"sm"}
      >
        <OverlayOne />
        <ModalContent>
          <ModalBody>
            <Verify />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
