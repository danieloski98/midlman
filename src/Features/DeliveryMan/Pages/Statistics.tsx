import React from 'react'
import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

const INACTIVE = 'flex-1 flex justify-center h-12 items-center cursor-pointer hover:bg-gray-200'
const ACTIVE = 'flex-1 border-b-2 border-midlman_color flex justify-center h-12 items-center cursor-pointer hover:bg-gray-200'

export default function Statistics() {
    const [tab, setTab] = React.useState(1);

    return (
        <div className="w-full h-full flex flex-col">

        {/* header */}
        <div className="w-full h-20 flex font-Poppins-Bold text-xl">
            <p>Statistics</p>
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

        {/* tabbar */}
        <div className="w-full h-auto flex border-b-2 border-gray-300">

            <div className={tab === 1 ? ACTIVE:INACTIVE} onClick={() => setTab(1)}>
                <p>Total Orders</p>
            </div>

            <div className={tab === 2 ? ACTIVE:INACTIVE} onClick={() => setTab(2)}>
                <p>Completed Orders</p>
            </div>

            <div className={tab === 3 ? ACTIVE:INACTIVE} onClick={() => setTab(3)}>
                <p>Returned Orders</p>
            </div>

            <div className={tab === 4 ? ACTIVE: INACTIVE} onClick={() => setTab(4)}>
                <p>Cancelled Orders</p>
            </div>

        </div>

        {/* main table */}
        <div className="w-full overflow-x-auto overflow-y-auto h-80 mt-2">
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
