import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Input, Divider, Spinner } from '@chakra-ui/react'
import { IPrescription } from '../../../../../Types/Prescription'
import useDetails from '../../../../../Hooks/useDetails';
import { url } from '../../../../../Utils/URL';

interface IProps {
    open: boolean;
    close: Function;
    prescription: IPrescription;
}

export default function PrescriptionModal2({ open, close, prescription }: IProps) {
    const [image, setImage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const { token } = useDetails();
    const fileReader = React.useRef(new FileReader()).current;


    React.useEffect(() => {
        fileReader.addEventListener("load", () => {
            setImage(fileReader.result as string);
        })
    }, [fileReader]);


    const read = (files: any) => {
        const file = files[0];
        fileReader.readAsDataURL(file);
    }

    const openPicker = () => {
        document.getElementById('file')?.click();
    }

    const post = async () => {
        try {
            setLoading(true);
            const request = await fetch(`${url}/order/request`, {
                method: 'post',
                headers: {
                    authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({...prescription, image }),
            });
            const json = await request.json();
            setLoading(false);
            console.log(json);
            if (!request.ok) {
                alert(json.message);
            }else {
                alert(JSON.stringify(json));
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Modal isOpen={open} onClose={() => close()} isCentered scrollBehavior="inside" size="lg">
            <input type="file" id="file" accept="image/*" onChange={(e) => read(e.target.files)} />
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody className="w-full flex justify-center ">
                   <div className="w-4/5 pt-6">
                        <h3 className="text-md font-Poppins-Medium">Add Prescription Report</h3>

                        {
                            prescription === undefined && (
                                <div className="w-full h-24 flex justify-center items-center">
                                    <Spinner size="lg" color="green" />
                                </div>
                            )
                        }

                       {prescription !== undefined && (
                           <div className="w-full flex flex-col">
                           <div className="flex flex-col mt-6">
                                   <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">User ID</label>
                                   <Input value={prescription.user ? prescription.user : ''} />
                               </div>
   
                               {
                                   prescription !== undefined  && prescription.products.map((item, index) => (
                                       <div key={index.toString()}>
                                           <div className="flex flex-col mt-6">
                                               <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Product Name</label>
                                               <Input value={item.productName} />
                                           </div>
   
                                           <div className="flex flex-col mt-3">
                                               <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Amount</label>
                                               <Input value={item.amount} />
                                           </div>
   
                                           <div className="flex flex-col mt-3">
                                               <label htmlFor="" className="text-sm font-Poppins-Regular mb-1">Quantity</label>
                                               <Input value={item.quantity} />
                                           </div>
   
                                           <div className="w-full">
                                               <Divider orientation="horizontal" colorScheme="blackAlpha" size="md" />
                                           </div>
                                       </div>
                                   ))
                               }
                          </div>
                       )}

                        <div className="w-full flex justify-between items-center mt-6">
                            <div className="flex flex-col">
                                <p className="text-sm mb-3 font-Poppins-Regular">Prescription Image</p>
                                <div className="w-40 h-24 rounded-md border-1 border-gray-200">
                                    {
                                        image !== '' && (
                                            <img src={image} alt="logo" className="w-full h-full object-cover" />
                                        )
                                    }
                                </div>
                            </div>
                            <button onClick={openPicker} className="w-40 text-white h-10 rounded bg-midlman_color text-xs">Upload Image</button>
                        </div>

                        {/* <div className="mt-6">
                            <p className="text-sm mb-3 font-Poppins-Regular">Description</p>
                            <div className="w-full h-24 rounded-md border-1 border-midlman_color mt-6"></div>
                        </div> */}

                        <button disabled={loading} onClick={post} className="w-full text-white h-10 rounded bg-midlman_color text-xs mt-6 mb-10">
                          {
                              loading ? <Spinner size="sm" color="white" /> : <span>  Upload</span>
                          }
                        </button>
                   </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
