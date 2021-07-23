import { Select, Input, Spinner, Modal, ModalOverlay, ModalBody, ModalContent } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from 'react-query'
import { url } from "../../../../../Utils/URL";
import * as axios from 'axios'
import { IBrand } from "../../../../../Types/Brand";
import LoadingModal from "../../../../Modals/LoadingModal";
import { queryclient } from '../../../../../App'

//get brands functions
async function getBrands() {
    const request = await axios.default.get(`${url}/brand`);
    return request;
}

async function deleteBrand(id: string) {
  const request = await axios.default.delete(`${url}/brand/delete/${id}`)
  return request;
}

export default function Brand() {
  // hooks
  const history = useHistory();
  const { isLoading } = useQuery('getbrands', getBrands, {
    //   retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    //   retry: 6,
      onSuccess: (data: any) => {
          setLoading(false);
          setBrands(prev => [...data.data.response]);
        //   alert(JSON.stringify(data));
      },
      onError: (error: any) => {
          setLoading(false);
          alert(JSON.stringify(error.message));
      },
  })

  // mutations
  const mutation = useMutation((id: string) => deleteBrand(id), {
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
  const [brands, setBrands] = React.useState([] as IBrand[]);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');

  // effects
  React.useEffect(() => {
    // if (isLoading) {
    //     setLoading(true);
    // }else {
    //     setLoading(false);
    // }
  }, [isLoading])

  // functions
  const close = () => {
    setOpen(false);
    setText('');
  }

  const deleteBrandbyid = (id: string, name: string) => {
    setText(`Deleting ${name}`);
    setOpen(true);
    mutation.mutate(id);
  }

  const editbrand = (id: string) => {
    history.push(`/dashboard/editbran/${id}`);
  }


  return (
    <div className="w-full h-full flex flex-col px-10 py-8 ">
      <LoadingModal open={open} onClose={close} text={text} />
      <p className="font-Poppins-Semibold text-lg">Brand</p>
      <div className="w-full flex relative flex-row items-center py-8">
        <div className="w-24 flex items-center mr-4">
          <Select fontSize="xs" color="#828282" placeholder="Sort By" />
        </div>
        <div className="w-48 flex items-center">
          <div className="fixed z-10 ml-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
          <Input fontSize="xs" paddingLeft="10" placeholder="Search ..." />
        </div>
        <div className="w-full flex flex-1" />
        <button
          onClick={() => history.push("/dashboard/newbrand")}
          className="bg-midlman_color flex flex-row items-center font-Poppins-Bold text-white text-xs py-3 px-6 rounded-md mx-1"
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
          Add New Brand
        </button>
      </div>

      {loading ? (
        <div className="w-full h-64 flex justify-center items-center flex-col">
          <Spinner color="green.500" size="xl" />
          <p className="mt-3 text-midlman_color text-md font-Poppins-Medium">
            Loading brands...
          </p>
        </div>
      ) : (
        <div className="w-full">
          {brands.length < 1 ? (
            <div className="w-full h-64 flex justify-center items-center flex-col">
              <img
                src="/images/empty.png"
                alt="notfound"
                className="w-40 h-40 object-contain"
              />
              <p className="mt-3 text-midlman_color text-md font-Poppins-Medium">
                Sorry There are no brands...
              </p>
            </div>
          ) : (
            <div className="w-auto my-14">
              <table className="text-sm ">
                <thead>
                  <tr className="font-Poppins-Semibold">
                    <th className="bg-white">ID</th>
                    <th className="bg-white">Brand</th>
                    <th className="bg-white">Logo</th>
                    <th className="bg-white">Added/Last Modified</th>
                    <th className="bg-white">Status</th>
                    <th className="bg-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((item, index) => {
                    return (
                      <tr key={index} className="font-Poppins-Regular">
                        <td className="font-Poppins-Semibold">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <div className="w-full flex justify-center text-midlman_color text-Poppins-Medium cursor-pointer">
                            <a href={item.logo} target="_blank" rel="noreferrer" >View Logo</a>
                          </div>
                        </td>
                        <td>{`${new Date(item.updatedAt).toUTCString()}`}</td>
                        <td>{item.status ? 'Active': 'Inactive'}</td>
                        <td>
                          <div className=" w-full h-full flex flex-row items-center">
                            <div
                              onClick={() =>
                                history.push(`/dashboard/editbrand/${item._id}/${item.name}`)
                              }
                              className="flex flex-row cursor-pointer"
                            >
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.7071 0.707107L16.5355 3.53553C16.9261 3.92606 16.9261 4.55922 16.5355 4.94975L15.1213 6.36396L10.8787 2.12132L12.2929 0.707107C12.6834 0.316583 13.3166 0.316583 13.7071 0.707107ZM9.46447 3.53553L1.27208 11.7279L0.979185 16.2635L5.51472 15.9706L13.7071 7.77817L9.46447 3.53553Z"
                                  fill="#1B75BB"
                                />
                              </svg>
                              <p className="ml-1 cursor-pointer" style={{ color: "#1B75BB" }}>
                                Edit
                              </p>
                            </div>
                            <div
                              className="rounded-full w-4 ml-8 h-4 flex justify-center items-center"
                              style={{ backgroundColor: "#EB5757" }}
                            >
                              <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.292893 0.292893C0.683417 -0.0976312 1.31658 -0.097631 1.70711 0.292893L4.03033 2.61612L6.35355 0.292893C6.74407 -0.097631 7.37724 -0.0976312 7.76776 0.292893C8.15829 0.683417 8.15829 1.31658 7.76776 1.70711L5.44454 4.03033L7.36396 5.94975C7.75449 6.34027 7.75449 6.97344 7.36396 7.36396C6.97344 7.75449 6.34027 7.75449 5.94975 7.36396L4.03033 5.44454L2.11091 7.36396C1.72039 7.75449 1.08722 7.75449 0.696697 7.36396C0.306172 6.97344 0.306172 6.34027 0.696697 5.94975L2.61612 4.03033L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <p onClick={() => deleteBrandbyid(item._id, item.name)} className="ml-1 cursor-pointer" style={{ color: "#EB5757" }}>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {brands.length > 0 && (
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
