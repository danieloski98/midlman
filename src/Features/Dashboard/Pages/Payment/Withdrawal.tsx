import React from "react";
import { Select, InputGroup, InputLeftElement, Input, } from "@chakra-ui/react";
import { FiSearch, FiTrash, FiX } from "react-icons/fi";
import DeclinedModal from "../../../Modals/DeclinedModal";
import { url } from "../../../../Utils/URL";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import useDetails from "../../../../Hooks/useDetails";
import { IWithdrawal } from "../../../../Types/Withdrawals";
import LoadingModal from "../../../Modals/LoadingModal";

// get withdrawals
const getWithdrawal = async () => {
  const request = await fetch(`${url}/wallet/withdrawals`, {
    method: "get",
  });
  const json = await request.json();

  if (!request.ok) {
    throw new Error("An error occured");
  } else {
    return json;
  }
};

const color = (value: string) => {
  switch (value) {
    case "Pending": {
      return "#F2994A";
    }
    case "Approved": {
      return "#00A69C";
    }
    case "Declined": {
      return "red";
    }
  }
};

export default function Withdrawal() {
  const [status, setStatus] = React.useState("Pending");
  const [showModal, setShowModal] = React.useState(false);
  const { token } = useDetails();
  const [withdrawals, setWithdrawals] = React.useState([] as IWithdrawal[]);
  const [loading, setLoading] = React.useState(true);
  const [text, setText] = React.useState("Loading Withdrawals");
  const [error, setError] = React.useState(false);
  const [id, setID] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState('')

  // getroles query
  const { refetch } = useQuery("getRoles", getWithdrawal, {
    onSuccess: (data) => {
      setWithdrawals(data.response);
      setLoading(false);
      setText("");
      setError(false);
    },
    onError: (data) => {
      setLoading(false);
      setError(true);
    },
  });

  // effects
  React.useEffect(() => {
    if (status === "Declined") {
      setShowModal(true);
    }
  }, [status]);

  // functions

  const closeDeclineModal = () => {
    setShowModal(false);
  };

  const deleteWithdrawal = async (id: string) => {
    setText("Deleting Role...");
    setLoading(true);
    const request = await fetch(`${url}/wallet/delete/withdraw/${id}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const json = await request.json();
    setText("");
    setLoading(false);
    if (!request.ok) {
      alert(json.message);
      return;
    } else {
      alert("Role Created");
      setShowModal(false);
      return;
    }
  };

  const editWithdrawal = async (status: string) => {
    setText("Updating Withdrawal...");
    setLoading(true);
    const request = await fetch(`${url}/wallet/edit/withdraw/${id}`, {
      method: "put",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    const json = await request.json();
    setText("");
    setLoading(false);
    if (!request.ok) {
      alert(json.message);
      return;
    } else {
      alert("Role Updated");
    //   setEdit(false);
      return;
    }
  };

  return (
    <div className="w-full px-8 h-auto flex flex-col">
      {/* modal */}

      <LoadingModal
        open={loading}
        onClose={() => setLoading(false)}
        text={text}
      />
      <DeclinedModal isOpen={showModal} onClose={closeDeclineModal} />

      {/* end of modal  */}

      <h3 className="text-xl font-Poppins-Medium mt-10">Withdrawal History</h3>

      {/* header */}

      <div className="w-full flex justify-between mt-8">
        <div className="flex w-auto">
          <div className="w-40">
            <Select
              fontSize="xs"
              width={130}
              placeholder="Sort By"
              className="text-xs border-1 border-gray-400"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="reference">Reference</option>
              <option value="date">Date</option>
            </Select>
          </div>

          <InputGroup
            className=" rounded ml-2 w-80"
          >
            <InputLeftElement children={<FiSearch size={20} color="grey" />} />
            <Input type="text" placeholder="Search by reference number" fontSize="xs" value={search} onChange={(e) => setSearch(e.target.value)} />
          </InputGroup>
        </div>
        <div>
          <button className=" bg-midlman_color w-24 h-10 text-sm rounded text-white font-Poppins-Medium">
            Print
          </button>
        </div>
      </div>

      {/* end of header */}

      {/* error */}

      {!loading && error && (
        <div className="w-full flex flex-col justify-center items-center">
          <img src="/images/error.svg" alt="" className="w-32 h-32" />
          <p className="mt-3">An Error Occured</p>
        </div>
      )}

      {/* table */}

      {!loading && (
        <div className="w-full mt-20 overflow-x-auto" style={{ height: 250 }}>
          <table>
            <thead>
              <tr className="font-Poppins-Medium text-xs">
                <th className="bg-white">
                  <p className="w-56 text-sm font-Poppins-Medium">
                    Transaction Reference
                  </p>
                </th>
                <th className="bg-white">
                  <p className="w-56">User</p>
                </th>
                <th className="bg-white">
                  <p className="w-56">Amount</p>
                </th>
                <th className="bg-white">
                  <p className="w-56">Date & Time</p>
                </th>
                {/* <th className="bg-white">
                                  <p className="w-56">Account Number</p>
                              </th> */}
                <th className="bg-white">
                  <p className="w-56">Status</p>
                </th>
                <th className="bg-white">
                  <p className="w-56">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawals
              .sort((a, b) => {
                  if (sort === 'reference') {
                    const x = a.reference.toLowerCase();
                    const y = b.reference.toLowerCase();
  
                    if (x > y) { return -1 }
                    if (x < y) { return 1 }
                  } else if (sort === 'date') {
                    const x = a.createdAt.toLowerCase();
                    const y = b.createdAt.toLowerCase();
  
                    if (x > y) { return -1 }
                    if (x < y) { return 1 }
                  }
                  return 0;
              })
              .filter((item) => {
                  if (search === '') {
                      return item;
                  } else if (item.reference.toLowerCase().includes(search.toLowerCase())) {
                    return item;
                  }
              })
              .map((item, index) => (
                <tr
                  key={index.toString()}
                  className="font-Poppins-Medium text-xs"
                >
                  <td>{item.reference}</td>
                  <td>{item.user}</td>
                  <td>{item.amount}</td>
                  <td>{item.createdAt}</td>
                  {/* <td>{item.account_number}</td> */}
                  <td>
                    <Select
                      value={item.status}
                      onChange={(e) => {
                        setID(item._id);
                        editWithdrawal(e.target.value);
                      }}
                      color={color(item.status)}
                      size="xs"
                      width="full"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
                    </Select>
                  </td>
                  <td>
                    <p
                      onClick={() => deleteWithdrawal(item._id)}
                      className="text-red-500 text-xs font-Poppins-Bold flex items-center"
                    >
                      <FiTrash size={20} color="red" />
                      <span className="ml-2">Delete</span>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* end of tabel */}

      {/* pagination */}

      {!loading && withdrawals.length > 0 && (
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

      {/* end of pagination */}
    </div>
  );
}
