import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
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
                <ModalCloseButton />
                <ModalBody className="h-64">
                    <div className="flex flex-col items-center py-8">
                        <img src="/images/email-sent.svg" alt="success" className="w-32 h-32" />
                        <p className="mt-5 text-xl font-Poppins-Medium">{props.text}</p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
