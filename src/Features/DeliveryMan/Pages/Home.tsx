import React from 'react'
import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { Value, MenuContext } from '../../../Context/MenuContext'

export default function Home() {
    const menuContaxt: Value = React.useContext(MenuContext);

    const print = () => {
        if (!menuContaxt.showModal) {
            window.print();
            return;
        } else {
            menuContaxt.setShowModal(false);
            setTimeout(() => {
                window.print();
            }, 3000);
        }
    }
    return (
        <div className="w-full h-full flex flex-col">

            {/* header */}
            <div className="w-full h-20 flex font-Poppins-Bold text-xl">
                <p>Your Deliveries</p>
            </div>

            {/* Search bar */}
            <div className="w-full h-16 flex">
                <div className="w-42 h-8">
                    <Select placeholder="Sort by" size="sm" fontSize="sm" className="rounded-md">
                        <option value="id">id</option>
                    </Select>
                </div>
                <div className="w-64 h-8 ml-6">
                    <InputGroup size="sm" fontSize="sm"  className="rounded-md">
                        <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                        <Input placeholder="Search by..." />
                    </InputGroup>
                </div>
            </div>

            {/* statistic bar */}
            <div className="w-full flex justify-between">

                <div className="flex">
                    <div className="border-2 rounded border-midlman_color w-40 h-8 text-midlman_color text-sm flex justify-center items-center">
                        <p>Delivered: 4</p>
                    </div>
                    <div className="border-2 rounded border-pending_color w-40 h-8 text-pending_color text-sm flex justify-center items-center ml-6">
                        <p>Pending: 6</p>
                    </div>
                </div>

                <div className="flex">
                    <button onClick={print} className="text-sm bg-midlman_color text-white w-20 rounded">Print</button>
                </div>

            </div>

            {/* main table */}
            <div className="w-full overflow-x-auto overflow-y-auto h-80 mt-6">
                <table>
                    <thead className="text-sm">
                        <tr>
                            <td>
                                <p>Order ID</p>
                            </td>
                            <td>
                                <p>User ID</p>
                            </td>
                            <td>
                                <p>Account Type</p>
                            </td>
                            <td>
                                <p>Items</p>
                            </td>
                            <td>
                                <p>Delivery Address</p>
                            </td>
                            <td>
                                <p>Phone number</p>
                            </td>
                            <td>
                                <p>Total Order</p>
                            </td>
                            <td>
                                <p>Action</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>efwerfwr</td>
                            <td>Earnest</td>
                            <td>Portal</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio sed laudantium.</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>09033634507</td>
                            <td>N3500</td>
                            <td>Pending</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* pagination part */}

            <div className="w-full h-auto mt-6 flex justify-between text-md font-Poppins-Regular text-sm">
                <div>
                    <p>Showing 1-10 of 30</p>
                </div>
                <div className="flex w-24 justify-between">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}
