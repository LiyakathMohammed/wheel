import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: [],
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("lastName is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  role: yup
    .object()
    .shape({
      label: yup.string().required("Role is required"),
      value: yup.string().required("Role value is required"),
    })
    .required("Role is required")
    .nullable(),
});
