import { Select, Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import React from "react";
import LoadingModal from "../../../Modals/LoadingModal";
import { queryclient } from "../../../../App";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { url } from "../../../../Utils/URL";
import * as axios from "axios";
import useDetails from "../../../../Hooks/useDetails";
import { ICoupon } from "../../../../Types/Coupons";
import { FiSearch, FiEdit2, FiTrash2, } from 'react-icons/fi'

async function getCoupons() {
  const request = await fetch(`${url}/coupon`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
  });

  const json = await request.json();

  if (!request.ok) {
      throw new Error("An Error occured");
  }

  return json;
}

async function deleteCoupons(id: string, token: string) {
  const request = await fetch(`${url}/coupon/delete/${id}`,
  {
     method: 'delete',
     headers: {
        Authorization: `Bearer ${token}`
      }
  })
  
  const json = await request.json();

  if (!request.ok) {
      throw new Error("An Error occured");
  }

  return json;
}

export default function Coupon() {
  const history = useHistory();
  const {token} = useDetails()
  const { isLoading } = useQuery(["getcoupons",], () => getCoupons(), {
    //   retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    //   retry: 6,
    onSuccess: (data: any) => {
      setLoading(false);
      console.log(data.response);
      if (data.message !== undefined) {
          alert(data.message);
          return;
      }
      setCoupons((prev) => [...data.response]);
      //   alert(JSON.stringify(data));
    },
    onError: (error: any) => {
      setLoading(false);
      alert(JSON.stringify(error.message));
    },
  });


  // mutations
  const mutation = useMutation((params: { id: string, token: string}) => deleteCoupons(params.id, params.token), {
    onSuccess: (data) => {
      setOpen(false);
      setText('');
      alert(data.data.message);
      queryclient.invalidateQueries();
    },
    onError: (error) => {
      setOpen(false);
      setText('');
      alert(JSON.stringify(error));
    }
  })

  // state
  const [loading, setLoading] = React.useState(true);
  const [coupons, setCoupons] = React.useState([] as ICoupon[]);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  // functions
  const close = () => {
    setOpen(false);
    setText("");
  };

  const deleteCouponbyid = (id: string, code: string) => {
    setText(`Deleting Coupon with Code ${code}`);
    setOpen(true);
    mutation.mutate({ id, token});
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8 ">
      <LoadingModal open={open} text={text} onClose={close} />
      <p className="font-Poppins-Semibold text-lg">Coupon</p>
      <div className="w-full flex relative flex-row items-center py-8">
        <div className="w-40 flex items-center mr-4">
          <Select fontSize="xs" color="#828282" placeholder="Sort By" >
            <option>Coupon ID</option>
            <option>Coupon Type</option>
            <option>Coupon Code</option>
          </Select>
        </div>
        <div className="w-48 flex items-center">
          <InputGroup>
            <InputLeftElement children={<FiSearch size={20} color="grey" />} />
            <Input fontSize="xs" paddingLeft="10" placeholder="Search ..." />
          </InputGroup>
        </div>
        <div className="w-full flex flex-1" />
        <button
          onClick={() => history.push("/dashboard/addnewcoupon")}
          className="bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1 transition-all transform hover:scale-110"
        >
          <svg
            className="mr-2"
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="white" />
          </svg>{" "}
          Add New Coupon
        </button>
      </div>
      {loading ? (
        <div className="w-full h-64 flex justify-center items-center flex-col">
          <Spinner color="green.500" size="xl" />
          <p className="mt-3 text-midlman_color text-md font-Poppins-Medium">
            Loading Coupons...
          </p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto h-auto py-6">
          {coupons.length < 1 ? (
            <div className="w-full h-64 flex justify-center items-center flex-col">
              <img
                src="/images/empty.png"
                alt="notfound"
                className="w-40 h-40 object-contain"
              />
              <p className="mt-3 text-midlman_color text-md font-Poppins-Medium">
                Sorry There are no Coupons...
              </p>
              `
            </div>
          ) : (
            <table className="text-sm w-full">
              <thead>
                <tr className="font-Poppins-Semibold">
                  <th className="bg-white">
                      <p className="w-56">ID</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-56">Coupon Code</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-40">Coupon Type</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-40">Coupon Discount</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-56">Expiry Date</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-32">Status</p>
                  </th>
                  <th className="bg-white">
                      <p className="w-56">Action</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((item, index) => {
                  return (
                    <tr key={index} className="font-Poppins-Regular">
                      <td className="font-Poppins-Semibold">{item._id}</td>
                      <td>{item.code}</td>
                      <td>{item.type}</td>
                      <td>{item.discount}</td>
                      <td>{new Date(item.expiryTime).toUTCString()}</td>
                      <td>
                        {item.status ? 'Active':'InActive'}
                      </td>
                      <td>
                        <div className=" w-full h-full flex flex-row items-center">
                          <div
                            onClick={() =>
                              history.push("/dashboard/editcoupon")
                            }
                            className="flex cursor-pointer flex-row "
                          >
                            <FiEdit2 size={20} color="#1B75BB" />
                            <p className="ml-1" style={{ color: "#1B75BB" }}>
                              Edit
                            </p>
                          </div>
                          <div
                            className="rounded-full w-4 ml-8 h-4 flex justify-center items-center"
                            
                          >
                            <FiTrash2 size={20} color="red" />
                          </div>
                          <p onClick={() => deleteCouponbyid(item._id, item.code)} className="ml-1 cursor-pointer" style={{ color: "#EB5757" }}>
                            Delete
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
      <div className="w-auto my-14"></div>

      {coupons.length > 0 && (
        <div className="w-full flex flex-row items-center pb-12">
          <p className="font-Poppins-Regular text-xs">
            Showing 1-10 of 30 items
          </p>
          <div className="w-full flex flex-1" />
          <div className="w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 bg-completed_bg cursor-pointer ">
            1
          </div>
          <div className="w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer">
            2
          </div>
          <div className="w-8 h-8 flex justify-center items-center font-Poppins-Semibold text-xs mr-1 border-2 border-login_buttton rounded-md cursor-pointer">
            3
          </div>
        </div>
      )}
    </div>
  );
}
