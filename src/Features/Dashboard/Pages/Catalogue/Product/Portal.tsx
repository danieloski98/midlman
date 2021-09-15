import React from "react";
import { Select, Input } from "@chakra-ui/react";

interface IProps {
    formik: any;
}

export default function Portal({ formik }: IProps) {

  return (
    <div className="w-full">
      <div className="w-full py-4">
        <Select
          fontSize="xs"
          placeholder="Choose Portal Formulation"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Bottle</option>
          <option>Satchet</option>
          <option>Packs</option>
          <option>Cartons</option>
          <option>Amples</option>
          <option>Vials</option>
          <option>Rolls</option>
          <option>Other: Please Specify (text box)</option>
        </Select>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-400 text-xs mt-1">{formik.errors.name}</p>
        )}
      </div>
      <div className="w-full py-4">
        <Input
          fontSize="xs"
          placeholder="Price per Package Unit"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price && (
          <p className="text-red-400 text-xs mt-1">{formik.errors.price}</p>
        )}
      </div>
      <div className="w-full py-4">
        <Input
          fontSize="xs"
          placeholder="Quantity for express"
          name="stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.stock && formik.errors.stock && (
          <p className="text-red-400 text-xs mt-1">{formik.errors.stock}</p>
        )}
      </div>
    </div>
  );
}
