import React from "react";

interface IProps {
  orders: Array<any>;
  sort: string;
  search: string;
}

export default function OrderTable({ orders, sort, search }: IProps) {
  const Status = (source: any) => {
    if (source === "Requesting Return") {
      return <p style={{ color: "#9B51E0" }}>{source}</p>;
    } else if (source === "Processing") {
      return <p style={{ color: "#1B75BB" }}>{source}</p>;
    } else if (source === "Pending") {
      return (
        <p className="cursor-pointer" style={{ color: "#F2994A" }}>
          {source}
        </p>
      );
    } else {
      return <p style={{ color: "#00A69C" }}>{source}</p>;
    }
  };

  return (
    <div className="w-full">
        {
            orders.length < 1 && (
                <div className="w-full h-64 flex justify-center items-center">
                    <p>No Orders</p>
                </div>
            )
        }
      {orders.length > 0 && (
        <div className="w-full">
          {
            <div className="w-auto h-auto overflow-x-auto py-4">
              <table className="text-xs">
                <thead>
                  <tr className="font-Poppins-Semibold">
                    <th className="bg-white">
                      <p className="w-24 text-cen">S/N</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-24 text-center">Order ID</p>
                    </th>
                    <th className="bg-white ">
                      <p className="w-24 text-center">Order By</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-24 text-center">Type</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-24 text-center">Items</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-40 text-center">Quantity</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-24 text-center">Order Total</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-56 text-center">Date/Time Purchased</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-24 text-center">Delivery By</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-32 text-center">Order Status</p>
                    </th>
                    <th className="bg-white">
                      <p className="w-32 text-center">Payment Status</p>
                    </th>
                    {/* <th className='bg-white' >
                           <p className="w-56 text-center">Action</p></th>  */}
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .sort((a, b): number => {
                      if (sort === "_id") {
                        let x = a._id.toLowerCase();
                        let y = b._id.toLowerCase();
                        if (x < y) {
                          return -1;
                        }
                        if (x > y) {
                          return 1;
                        }
                      }
                      if (sort === "type") {
                        let x = a.type.toLowerCase();
                        let y = b.type.toLowerCase();
                        if (x < y) {
                          return -1;
                        }
                        if (x > y) {
                          return 1;
                        }
                      }
                      return 0;
                    })
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val._id.toLowerCase().includes(search.toLowerCase()) ||
                        val.type.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item, index) => {
                      return (
                        <tr key={index} className="font-Poppins-Regular">
                          <td className="font-Poppins-Semibold">{index + 1}</td>
                          <td>
                            <div className="flex flex-row items-center">
                              {item._id}
                              <p className="text-xs text-midlman_color ml-3 cursor-pointer">
                                View
                              </p>
                            </div>
                          </td>
                          <td>{item.user}</td>
                          <td>{item.type}</td>
                          <td className="overflow-y-scroll">
                            <p className="text-xs text-menu_gray w-56 h-20 overflow-scroll">
                              {item.product}
                            </p>
                          </td>
                          <td>
                            <p className="text-midlman_color cursor-pointer">
                              {item.quantity}
                            </p>
                          </td>
                          <td>item_total</td>
                          <td>item_purchasedate</td>

                          <td>item_deliveredby</td>
                          {/* <td className="text-yellow-600">
                                   <Select size="xs" onChange={(e) => handleChane(e)}>
                                       <option value="pending">Pending</option>
                                       <option value="processing">Processing</option>
                                       <option value="completed">Completed</option>
                                       <option value="cancelled">Cancelled</option>
                                   </Select>
                               </td> */}
                          <td>{Status(item.status)}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          }
        </div>
      )}
    </div>
  );
}
