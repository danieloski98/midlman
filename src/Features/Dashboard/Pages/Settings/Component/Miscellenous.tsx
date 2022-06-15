import React from 'react'
import {Switch} from '@chakra-ui/react'
import { url } from '../../../../../Utils/URL';
import { useQuery } from 'react-query';
import useDetails from '../../../../../Hooks/useDetails';
import LoadingModal from '../../../../Modals/LoadingModal';

// get all setting
const getSettings = async(token: string) => {
    const request = await fetch(`${url}/setting`, {
        method: 'get',
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const json = await request.json();

    if (!request.ok) {
        throw new Error('An Error Occured')
    }else {
        return json;
    }
}

export default function AutoWithdrawals() {
    const [withdrawal, setWidthDrawal] = React.useState(false);
    const [refund, setRefund] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([] as Array<any>);
    const [text, setText] = React.useState("Loading Settings");
    const [error, setError] = React.useState(false);
    const { token, adminDetails } = useDetails();

    // query
    const {} = useQuery(['getSettings', token], () => getSettings(token), {
        onSuccess: (data) => {
            setData(data.response);
            setRefund(data.response[0].autoRefund);
            setWidthDrawal((data.response[0].autoWithdraw));
            setLoading(false);
            console.log(data);
        },
        onError: () => {
            setLoading(false);
            setError(true);
        }
    } )
    
    const submit = async() => {
        setLoading(true);
        const request = await fetch(`${url}/setting/update/${adminDetails._id}`, {
            method: 'put',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({ autoRefund: refund, autuWithdraw: withdrawal, emailsNofifications: {
                "portal": "",
                "prescription": "",
                "portalOrders": "",
                "expressOrders": "",
                "portalMessage": "",
                "expressMessage": "",
                "withdrawal": "",
                "returnRequest": "",
                "orderStatus": "",
                "eTopUp": "",
                "paymentNotification": "",
                "approvedPortal": "",
                "lowStock": ""
            } })
        });

        const json = await request.json();
        setLoading(false);

        if (!request.ok) {
            alert(json.message);
            console.log(json);
        } else {
            alert('Updated');
        }
    }
    return (
        <div className='w-auto mt-8 py-8 ' >
                <LoadingModal open={loading} text={text} onClose={() => setLoading(false)} />
                <div className="w-auto flex flex-col items-center">
                    <div className="w-64 flex h-12 justify-between items-center">
                        <p className="font-Poppins-Medium text-black">Auto Withdrawal</p>
                        <Switch  size="md" colorScheme="teal" className="ml-6" checked={withdrawal} value={withdrawal ? 1:0} isChecked={withdrawal} onChange={() => setWidthDrawal(prev => !prev)} />
                    </div>
                    <div className="w-64 flex h-12 justify-between items-center mt-10">
                        <p className="font-Poppins-Medium text-black">Auto Refund</p>
                        <Switch  size="md" colorScheme="teal" className="ml-6" checked={refund} isChecked={refund} value={refund ? 1:0}  onChange={() => setRefund(prev => !prev)} />
                    </div>
                    <div className='w-full flex justify-center py-12 mt-24' >
                        <button onClick={submit} className='w-80 bg-midlman_color rounded-lg font-Poppins-Semibold text-xs text-white py-3' >
                            <span>Save Changes</span>
                        </button>
                    </div>
                </div>
        </div>
    )
}
