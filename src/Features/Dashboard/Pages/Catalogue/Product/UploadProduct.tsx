import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
// import { Textarea } from '@chakra-ui/textarea'
import React from "react";
import { useHistory } from "react-router";
import Editor from "../../WebPages/Component/Editor";
import AddPromo from "./AddPromo";
import { motion, AnimatePresence } from "framer-motion";
import { ICategories } from "../../../../../Types/Categories";
import { IBrand } from "../../../../../Types/Brand";
import { url } from "../../../../../Utils/URL";
import * as axios from "axios";
import { useQuery, useMutation } from "react-query";
import { FiChevronLeft, FiX } from "react-icons/fi";
import * as yup from "yup";
import { useFormik } from "formik";
import { queryclient } from "../../../../../App";
import Portal from "./Portal";
import Express from "./Express";
import LoadingModal from "../../../../Modals/LoadingModal";
import useDetails from "../../../../../Hooks/useDetails";

// validation Schema
const validationSchema = yup.object({
  name: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  formulation: yup.string().required(),
  brand: yup.string().required("This field is required"),
  stock: yup.number().required(),
  controlled: yup.boolean().required("This field is required"),
});

const expressValidation = yup.object({
    name: yup.string().required("This field is required"),
    price: yup.number().required("This field is required"),
    stock: yup.number().required("This field is required"),
  });

const initValues = {
  name: "",
  category: "",
  formulation: "",
  brand: "",
  stock: 0,
  controlled: true,
};

// get categories function
const getCat = async () => {
  const request = await fetch(`${url}/category`);
  const json = await request.json();

  if (!request.ok) {
    throw new Error("Couldn't get the catergories, please try again");
  }

  return json;
};

// get brands
async function getBrands() {
  const request = await axios.default.get(`${url}/brand`);
  return request;
}

export default function UploadProduct() {
  const fileReader1 = React.useRef(new FileReader()).current;
  const { adminDetails } = useDetails()

  const history = useHistory();
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [cats, setCategories] = React.useState([] as ICategories[]);
  const [brands, setBrands] = React.useState([] as IBrand[]);
  const [images, setImages] = React.useState([] as string[]);
  const [tags, setTags] = React.useState([] as Array<string>);
  const [promo, setPromo] = React.useState({
    discount: "",
    startDate: "",
    endDate: "",
  });
  const [description, setDescription] = React.useState("");


  const {} = useQuery("categories", getCat, {
    onSuccess: (data) => {
    //   setShowModal(false);
      // alert(JSON.stringify(data));
      setCategories(data.response);
      queryclient.invalidateQueries();
    },
    onError: (error) => {
    //   setShowModal(false);
      alert(JSON.stringify(error));
    },
  });

  const {} = useQuery("getbrands", getBrands, {
    //   retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    //   retry: 6,
    onSuccess: (data: any) => {
    //   setShowModal(false);
      setBrands((prev) => [...data.data.response]);
      //   alert(JSON.stringify(data));
    },
    onError: (error: any) => {
    //   setShowModal(false);
      alert(JSON.stringify(error.message));
    },
  });

  // formik
  const formik = useFormik({
    validationSchema,
    onSubmit: () => {},
    initialValues: initValues,
  });

  // express formik
  const expressFormik = useFormik({
      initialValues: {name: '', price: 0, stock: 0},
      validationSchema: expressValidation,
      onSubmit: () => {}
  })

  // portal formik
  const portalFormik = useFormik({
    initialValues: {name: '', price: 0, stock: 0},
    validationSchema: expressValidation,
    onSubmit: () => {}
})

  // effects
  React.useEffect(() => {
    fileReader1.addEventListener("load", () => {
      const imgs = [...images, fileReader1.result as string];
      setImages(imgs);
      //  setImages(prev => [...prev, fileReader1.result as string]);
    });

    return () => {
      fileReader1.removeEventListener("load", () => {});
    };
  });

  // functions

  const pickCoverImage = () => {
    const picker = document.getElementById("picker1");
    picker?.click();
  };

  const onCoverPicked = (file: FileList) => {
    console.log(file[0]);
    fileReader1.readAsDataURL(file[0]);
  };

  const selectTag = (tag: string) => {
    if (tags.includes(tag)) {
      return;
    } else {
      setTags((prev) => [...prev, tag]);
      // const newTags = [...tags];
      formik
        .setFieldValue("medicalTags", tags, true)
        .then((data: any) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(formik.values);
    }
  };

  const deleteTag = (index: number) => {
    tags.splice(index, 1);
    const newTags = [...tags];
    setTags(newTags);
    formik
      .setFieldValue("medicalTags", newTags)
      .then((data: any) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formik.values);
  };

  const setpromo = (promo: any) => {
    setPromo(promo);
    // formik.setFieldValue('promo', promo);
    setShowModal(false);
  };

  const setDes = (des: string) => {
    setDescription(des);
  };

  const submit = async() => {
      //check for errors

      if (!formik.dirty || !formik.isValid) {
          alert('Please fillin the form properly 1');
          return;
      }

      if (!expressFormik.dirty || !expressFormik.isValid) {
        alert('Please fillin the form properly 2');
        return;
      }

      if (!portalFormik.dirty || !portalFormik.isValid) {
        alert('Please fillin the form properly 3');
        return;
      }

    if (images.length < 1) {
        alert('Please select the images');
          return;
    }

    setLoading(true);

    // create giant object
    const obj = {
        ...formik.values,
        variation: [portalFormik.values, expressFormik.values],
        medicalTags: tags,
        image: images,
        promo,
        description,
        unitPrice: {
            portal: portalFormik.values.price,
            express: expressFormik.values.price,
        },
        user: adminDetails._id,
    }
    console.log(obj)
    const request = await fetch(`${url}/product/create`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(obj)
    });

    const json = await request.json() as any;
    setLoading(false);

    if (!request.ok){
        console.log(json);
        alert(json.message);
    }else {
        console.log(json)
        alert(json.message);
    }

  }

  return (
    <div className="w-full h-full flex flex-col items-center py-8 ">
        <LoadingModal onClose={() => setLoading(false)} open={loading} text="Creating new product" />
      <input
        type="file"
        accept="image/*"
        id="picker1"
        hidden
        onChange={(e) => {
          onCoverPicked(e.target.files as FileList);
        }}
      />
      <p className=" w-100 font-Poppins-Semibold text-lg -ml-48">
        Upload a Product
      </p>
      <div className="w-full flex flex-col items-center pt-14 pb-8">
        <div
          onClick={() => history.push("/dashboard/product")}
          className="w-100 flex flex-row cursor-pointer items-center"
        >
          <FiChevronLeft color="#828282" size={25} />
          <p className="font-Poppins-Bold text-menu_gray text-xs ml-2">
            Back to Products
          </p>
        </div>
        <div className="w-100 flex flex-col py-8">
          <div className="w-full py-4">
            <Select
              fontSize="xs"
              placeholder="Select Category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {cats.map((item, index) => (
                <option key={index.toString()} value={item.name}>
                  {item.name}
                </option>
              ))}
              {/* <option>Give me more option</option> */}
            </Select>
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-400 text-xs mt-1">
                {formik.errors.category}
              </p>
            )}
          </div>
          <div className="w-full py-4">
            <p className="font-Poppins-Semibold text-sm mb-1">PRODUCT NAME</p>
            <Input
              fontSize="xs"
              placeholder="generic name of the product (e.g Paracetamol)"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-400 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="w-full py-4">
            <Select
              fontSize="xs"
              placeholder="Select Brand"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {brands.map((item, index) => (
                <option key={index.toString()} value={item.name}>
                  {item.name}
                </option>
              ))}
              {/* <option>Give me more option</option> */}
            </Select>
            {formik.touched.brand && formik.errors.brand && (
              <p className="text-red-400 text-xs mt-1">{formik.errors.brand}</p>
            )}
          </div>
          <div className="w-full py-4">
            <p className="font-Poppins-Semibold text-sm mb-1">
              Medical Tags (Optional)
            </p>
            {tags.length > 0 && (
              <div className="w-full h-10 flex mb-2 mt-2">
                {tags.map((item, index) => (
                  <div
                    onClick={() => deleteTag(index)}
                    className="w-auto h-8 flex justify-center p-2 items-center rounded-lg bg-gray-200 text-gray-600 text-xs mr-2 cursor-pointer"
                    key={index.toString()}
                  >
                    {item}{" "}
                    <span className="ml-2">
                      {" "}
                      <FiX color="red" size={15} />{" "}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <Select
              fontSize="xs"
              name="medicalTags"
              value={tags}
              onChange={(e) => selectTag(e.target.value)}
              onBlur={formik.handleBlur}
            >
              <option
                value="Drug A"
                hidden={tags.includes("Drug A") ? true : false}
              >
                Drug A
              </option>
              <option
                value="Drug B"
                hidden={tags.includes("Drug B") ? true : false}
              >
                Drug B
              </option>
              <option
                value="Drug C"
                hidden={tags.includes("Drug C") ? true : false}
              >
                Drug C
              </option>
            </Select>

          </div>
          <div className="w-full py-4">
            <Select fontSize="xs" placeholder="Choose Campaign">
              <option>Product of the Weeks</option>
              <option>Product of the Weeks</option>
            </Select>
          </div>
          <div className="w-full py-4">
            <Select
              fontSize="xs"
              placeholder="Choose Formulation"
              name="formulation"
              value={formik.values.formulation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>Syrup</option>
              <option>capsule</option>
              <option>tablets</option>
              <option>suspension</option>
              <option>injection</option>
              <option>aerosol</option>
              <option>topicals</option>
              <option>cremes</option>
              <option>ointments</option>
              <option>suppositories</option>
              <option>drops</option>
              <option>Other: Please Specify (text box)</option>
            </Select>
            {formik.touched.formulation && formik.errors.formulation && (
              <p className="text-red-400 text-xs mt-1">
                {formik.errors.formulation}
              </p>
            )}
          </div>
          <div className="w-100 overflow-x-auto py-4">
            <p className="font-Poppins-Semibold text-xs mb-1">Upload Images</p>
            <div className="flex flex-row w-full flex-nowrap">
              {images.length < 1 && (
                <div className="border-2 border-entries rounded-lg w-28 h-24 flex justify-center items-center px-4">
                  <p className="font-Poppins-Regular text-xs text-entries">
                    image size should not be above 350px
                  </p>
                </div>
              )}
              {images.length > 0 &&
                images.map((item, index) => (
                  <div
                    key={index.toString()}
                    className="border-2 border-entries rounded-lg w-28 h-24 flex justify-center items-center px-0 mr-4 flex-1"
                  >
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              <div
                onClick={pickCoverImage}
                className="border-2 border-entries rounded-lg h-24 flex justify-center ml-4 items-center px-4 cursor-pointer"
              >
                <p className="text-menu_gray text-base">+</p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mb-24 py-4">
            <p className="font-Poppins-Semibold text-xs mb-1">
              Product Description
            </p>
            {/* <Editor editing={setDes} /> */}
            <textarea className="w-full h-72 border-2 border-gray-400 rounded p-4"  placeholder='generic name of the product (e.g Paracetamol)' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <div className=" w-100 flex flex-row pb-8 ">
          <div
            onClick={() => setType(false)}
            className={
              !type
                ? "w-full flex justify-center border-b-2 cursor-pointer py-1 border-midlman_color"
                : "w-full flex justify-center border-b-2 cursor-pointer py-1 border-gray_exp"
            }
          >
            <p
              className={
                !type
                  ? "text-midlman_color text-xs font-Poppins-Semibold"
                  : "text-gray_exp text-xs font-Poppins-Semibold"
              }
            >
              Portal
            </p>
          </div>
          <div
            onClick={() => setType(true)}
            className={
              type
                ? "w-full flex justify-center border-b-2 cursor-pointer py-1 border-midlman_color"
                : "w-full flex justify-center border-b-2 cursor-pointer py-1 border-gray_exp"
            }
          >
            <p
              className={
                type
                  ? "text-midlman_color text-xs font-Poppins-Semibold"
                  : "text-gray_exp text-xs font-Poppins-Semibold"
              }
            >
              Express
            </p>
          </div>
        </div>
        <div className="w-96 h-full ">
          {type ? (
            <Express formik={expressFormik} />
          ) : (
            <Portal formik={portalFormik} />
          )}
          {/* <button className=' w-full bg-white border-2 border-midlman_color flex flex-row justify-center font-Poppins-Bold text-midlman_color text-xs my-4 py-3 rounded-md' >
                        <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" fill="#00A69C"/>
                        </svg> 
                        Add New Package Type
                    </button> */}
          <div className="w-full">
            <p className="text-sm font-Poppins-Semibold">STATUS</p>
            <div className="flex flex-row  mt-1 ml-4 items-center">
              <p className="text-xs mr-2 font-Poppins-Semibold">Active</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <AnimatePresence>
              <motion.div
                animate={{}}
                className="flex flex-row  mt-1 ml-4 items-center"
              >
                <p className="text-xs mr-2 font-Poppins-Semibold">
                  Controlled Drug
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="controlled"
                    value={formik.values.formulation}
                    onChange={(e) => selectTag(e.target.value)}
                    onBlur={formik.handleBlur}
                  />
                  <span className="slider round"></span>
                </label>
                {formik.touched.controlled && formik.errors.controlled && (
                  <p className="text-red-400 text-xs mt-1">
                    {formik.errors.controlled}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          {
            promo.discount === '' && (
              <div className="w-full flex flex-row items-center py-6">
              <div
                onClick={() => setShowModal(true)}
                className="border-2 border-entries cursor-pointer rounded-lg h-12 flex justify-center ml-4 items-center px-3"
              >
                <p className="text-menu_gray text-base">+</p>
              </div>
              <p className="text-sm font-Poppins-Semibold ml-2">Add Promo </p>
            </div>
            )
          }
          {
            promo.discount !== '' && (
              <p className="my-5 ml-6">Promo Added</p>
            )
          }
          <div className="w-full flex flex-row">
            <button onClick={submit} className="bg-midlman_color font-Poppins-Semibold text-white text-sm py-3 w-full rounded-md mr-1">
              Upload Product
            </button>
            <button className="bg-entries font-Poppins-Semibold text-menu_gray text-sm py-3 w-full rounded-md ml-1">
              CANCEL
            </button>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden my-2 overflow-y-auto inset-0 z-50 fixed outline-none focus:outline-none">
            <AddPromo close={setShowModal} selectPromo={setpromo} />
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
