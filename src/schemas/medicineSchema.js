import * as yup from "yup";

export const valueschema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  gram: yup
    .number()
    .min(0, 'Value cannot be negative') 
    .required("Gram is required"),
});
