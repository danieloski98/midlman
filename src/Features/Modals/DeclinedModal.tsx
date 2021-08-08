import React from 'react'
import { Modal, ModalOverlay, ModalBody, ModalContent } from '@chakra-ui/react'

interface IProps {
    isOpen: boolean;
    onClose: Function;
}

const DeclinedModal:React.FC<IProps> = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={() => onClose()} isCentered={true}>
          <ModalOverlay />
            <ModalContent className="py-10">
                <ModalBody className="py-6">
                    <p className="">Reason For Declining</p>
                    <textarea  className="w-full h-24 border-2 border-gray-400 rounded mt-4 text- p-1" />
                    <button onClick={() => onClose()} className="w-full h-12 bg-midlman_color text-white text-xs rounded shadow mt-6">Submit</button>
                </ModalBody>
            </ModalContent>
      </Modal>
    )
}

export default DeclinedModal;