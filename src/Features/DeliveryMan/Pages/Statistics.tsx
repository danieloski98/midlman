import React from 'react'
import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import OrderTable from '../Components/OrderTable'
import { url } from '../../../Utils/URL'
import useDetails from '../../../Hooks/useDetails'
import { useQuery } from 'react-query'
import LoadingModal from '../../Modals/LoadingModal'

const INACTIVE = 'flex-1 flex justify-center h-12 items-center cursor-pointer hover:bg-gray-200'
const ACTIVE = 'flex-1 border-b-2 border-midlman_color flex justify-center h-12 items-center cursor-pointer hover:bg-gray-200'

// get pending deliveries
const getPending = async (id: string) => {
    const request = await fetch(`${url}/admin/deliveryman/total/orders/${id}`);
    const json = await request.json();

    if (!request.ok) {
        throw new Error('An Error Occured');
    }else {
        return json;
    }
}

const getCompleted = async (id: string) => {
    const request = await fetch(`${url}/admin/deliveryman/completed/orders/${id}`);
    const json = await request.json();

    if (!request.ok) {
        throw new Error('An Error Occured');
    }else {
        return json;
    }
}

const getCancelled = async (id: string) => {
    const request = await fetch(`${url}/admin/deliveryman/cancelled/orders/${id}`);
    const json = await request.json();

    if (!request.ok) {
        throw new Error('An Error Occured');
    }else {
        return json;
    }
}

export default function Statistics() {
    const [tab, setTab] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [total, setTotal] = React.useState([] as Array<any>);
    const [completed, setCompleted] = React.useState([] as Array<any>);
    const [cancelled, setCancelled] = React.useState([] as Array<any>);
    const [sort, setSort] = React.useState('type');
    const [search, setSearch] = React.useState('')
    const [active, setActive] = React.useState([] as Array<any>);
    const { adminDetails } = useDetails();
    const id = adminDetails._id as string;

    const totalQuery = useQuery(['getPendingg', id], () => getPending(id), {
        onSuccess: (data: any) => {
            setTotal(data.response);
            setLoading(false);
        }
    });

    const completedQuery = useQuery(['getCompleted', id], () => getCompleted(id), {
        onSuccess: (data: any) => {
            setCompleted(data.response);
        }
    });

    const cancelledQuery = useQuery(['getCancelled', id], () => getCancelled(id), {
        onSuccess: (data: any) => {
            setCancelled(data.response);
        }
    });

    return (
        <div className="w-full h-full flex flex-col">

        <LoadingModal open={loading} onClose={() => setLoading(false)} text="loading Orders" />
        
        {/* header */}
        <div className="w-full h-20 flex font-Poppins-Bold text-xl">
            <p>Statistics</p>
        </div>

        {/* Search bar */}
        <div className="w-full h-16 flex">
            <div className="w-42 h-8">
                <Select placeholder="Sort by" size="sm" fontSize="sm" className="rounded-md" onChange={(e) => setSort(e.target.value)}>
                    <option value="id">id</option>
                </Select>
            </div>
            <div className="w-64 h-8 ml-6">
                <InputGroup size="sm" fontSize="sm"  className="rounded-md">
                    <InputLeftElement children={<FiSearch size={20} color="grey" />} />
                    <Input placeholder="Search by..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </InputGroup>
            </div>
        </div>

        {/* tabbar */}
        <div className="w-full h-auto flex border-b-2 border-gray-300">

            <div className={tab === 1 ? ACTIVE:INACTIVE} onClick={() => {setTab(1); setActive(total)}}>
                <p>Total Orders</p>
            </div>

            <div className={tab === 2 ? ACTIVE:INACTIVE} onClick={() => {setTab(2); setActive(completed)}}>
                <p>Completed Orders</p>
            </div>

            {/* <div className={tab === 3 ? ACTIVE:INACTIVE} onClick={() => setTab(3)}>
                <p>Returned Orders</p>
            </div> */}

            <div className={tab === 3 ? ACTIVE: INACTIVE} onClick={() => {setTab(3); setActive(cancelled)}}>
                <p>Cancelled Orders</p>
            </div>

        </div>

        {/* main table */}
        <div className="w-full overflow-x-auto overflow-y-auto h-80 mt-2">
            <OrderTable search={search} sort={sort} orders={active} />
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
