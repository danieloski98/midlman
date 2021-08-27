import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Spinner,
  } from "@chakra-ui/react"

  function func() {}

  interface IProps {
      open: boolean;
      onClose: typeof  func;
      text: string;
  }
  

export default function LoadingModal(props: IProps) {
    return (
        <Modal isOpen={props.open} onClose={props.onClose} closeOnEsc={false} closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody className="h-64">
                    <div className="flex flex-col items-center">
                        <Spinner size="xl" color="green.500" />
                        <p className="mt-5 text-center font-Poppins-Medium text-gray-600">{props.text}</p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
