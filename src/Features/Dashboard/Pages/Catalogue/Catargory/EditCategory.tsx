import { Input } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import LoadingModal from "../../../../Modals/LoadingModal";
import * as axios from "axios";
import { url } from "../../../../../Utils/URL";
import { useFormik } from "formik";
import * as yup from "yup";
import { useQuery, useMutation } from "react-query";
import useDetails from "../../../../../Hooks/useDetails";
import { queryclient } from "../../../../../App";
import { ICategories } from "../../../../../Types/Categories";

const validationSchema = yup.object({
  name: yup.string().required("this field is required"),
});

async function getBrand(id: string) {
  const request = await fetch(`${url}/category/${id}`, {
    method: "GET",
  });
  const json = await request.json();

  if (!request.ok) {
    throw new Error("An error occured while trying to get the category");
  }
  return json;
}

const editBrand = async (id: string, body: any, token: string) => {
  body["icon"] = body.logo as string;

  // alert(JSON.stringify(body));

  try {
    const request = await axios.default.put(`${url}/category/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    return request;
  } catch (error) {
    return error;
  }
};

export default function EditCategory(props: any) {
  const fileReader1 = React.useRef(new FileReader()).current;

  const history = useHistory();
  const { token } = useDetails();

  const query = useQuery(
    ["getSingleBrand", props.match.params.id],
    () => getBrand(props.match.params.id),
    {
      onSuccess: (data) => {
        console.log(JSON.stringify(data));
        setCat(data.response);
        setOpen(false);
        setText("");
        formik.setFieldValue("name", cat.name, true);

        // if (icon === '') {
        //     setStatus(data.data.response.status);
        //     setIcon(data.data.response.logo);
        // }
      },
      onError: (error) => {
        setOpen(false);
        alert(JSON.stringify(error));
      },
    }
  );

  const mutation = useMutation(
    (param: { id: string; body: Partial<any>; token: string }) =>
      editBrand(param.id, param.body, token),
    {
      onSuccess: (data) => {
        setOpen(false);
        setText("");
        alert(data.data.message);
        queryclient.invalidateQueries();
        history.goBack();
      },
      onError: (error) => {
        console.log(error)
        setOpen(false);
        setText("");
        alert("An error occured, contact the backend team!");
      },
    }
  );

  // states
  const [open, setOpen] = React.useState(true);
  const [text, setText] = React.useState("Loading Category");
  const [cat, setCat] = React.useState({} as ICategories);
  const [icon, setIcon] = React.useState("");
  const [status, setStatus] = React.useState(false);

  // formik
  const formik = useFormik({
    initialValues: {
      name: cat.name,
    },
    onSubmit: () => {},
    validationSchema,
  });

  // effects
  React.useEffect(() => {
    fileReader1.addEventListener("load", () => {
      setIcon("");
      setIcon(fileReader1.result as string);
    });
    return () => {
      fileReader1.removeEventListener("load", () => {});
    };
  });

  // functions
  const close = () => {
    setOpen(false);
  };

  const pickCoverImage = () => {
    const picker = document.getElementById("picker1");
    picker?.click();
  };

  const onCoverPicked = (file: FileList) => {
    console.log(file[0]);
    fileReader1.readAsDataURL(file[0]);
  };

  const submit = () => {
    if (!formik.dirty && icon === "") {
      alert("You have to make changes to be able to update");
      return;
    }

    setText(`Updating Category with name ${formik.values.name}`);
    setOpen(true);
    mutation.mutate({
      id: props.match.params.id,
      body: { name: formik.values.name, icon: icon, status },
      token,
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center py-8 ">
      <input
        type="file"
        accept="image/*"
        id="picker1"
        hidden
        onChange={(e) => {
          onCoverPicked(e.target.files as FileList);
        }}
      />
      <LoadingModal open={open} text={text} onClose={close} />
      <p className=" w-100 font-Poppins-Semibold text-lg -ml-48">
        Edit Category
      </p>
      <div className=" w-100 flex flex-row -ml-48 mt-8">
        <p className="font-Poppins-Regular text-xs text-menu_gray">
          Categories
        </p>
        <svg
          className="mx-2"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z"
            fill="#828282"
          />
        </svg>
        <p className="font-Poppins-Regular text-xs text-menu_gray">
          Edit Categories
        </p>
        <svg
          className="mx-2"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71309 6.99999L1.70209 0.98999L0.288086 2.40399L4.88809 7.00399L0.288086 11.597L1.70209 13.011L7.71309 6.99999Z"
            fill="#828282"
          />
        </svg>
      </div>
      <div className="w-full flex flex-col items-center pt-14 pb-8">
        <div
          onClick={() => history.push("/dashboard/catergories")}
          className="w-100 flex flex-row cursor-pointer "
        >
          <svg
            width="10"
            height="15"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.53578 0.515015L0.0507812 9.00001L8.53578 17.485L9.95078 16.071L2.87878 9.00001L9.95078 1.92901L8.53578 0.515015Z"
              fill="#828282"
            />
          </svg>
          <p className="font-Poppins-Bold text-menu_gray text-xs ml-2">
            Back to Categories
          </p>
        </div>
        <div className="w-100 flex flex-col pb-8">
          <div className="w-full pt-8">
            <div className="py-2 mt-4">
              <p className="font-Poppins-Semibold text-xs mb-1">
                CATEGORY NAME
              </p>
              <Input
                fontSize="xs"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => formik.setFieldTouched("name", true, true)}
              />
            </div>
            <div className=" w-full py-2 flex flex-row ">
              <div className="flex flex-col">
                
                <div className="w-40 rounded-md h-16 border-1 border-entries">
                {icon !== null && (<img src={icon} alt="coverimage" className="w-full h-full object-cover" />)}
                </div>

                <button
                  onClick={pickCoverImage}
                  className="bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-40 rounded-md mt-2"
                >
                  Browse
                </button>
              </div>
              <div className="w-full flex flex-1" />
              {/* <div className='flex flex-col' >
                                <p className='font-Poppins-Semibold text-xs mb-1'>ICON</p>
                                <div className='w-40 rounded-md h-16 border-1 border-entries'>

                                </div>
                                <button className='bg-entries font-Poppins-Semibold text-menu_gray text-xs py-3 w-40 rounded-md mt-2' >Browse</button>
                            </div> */}
            </div>
          </div>
          <div className="w-full py-4">
            <p className="text-sm font-Poppins-Semibold">STATUS</p>
            <div className="flex flex-row  mt-1 ml-4 items-center">
              <p className="text-xs mr-2 font-Poppins-Semibold">Active</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="w-full flex flex-row pt-12">
            <button onClick={submit} className="bg-midlman_color font-Poppins-Semibold text-white text-xs py-3 w-full rounded-md mr-4">
              Submit
            </button>
            <button className="font-Poppins-Semibold text-black text-xs py-3 w-full rounded-md ml-4 bg-gray-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
