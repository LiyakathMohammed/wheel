import * as yup from "yup";

export const NOTES_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: [],
  tag: [],
};

export const NOTES_SEED_VALUES = {
  title: "How to Claim Warranty?",
  description:
    "Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. ",
  assignedContact: {
    label: "Knapp Berry",
    value: 2,
  },
  tag: {
    label: "UX",
    value: "UX",
  },
  createdAt: "2023-08-29T19:01:08+05:30",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .min(5, "Title must be at least 5 characters")
    .required("Title is required"),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  assignedContact: yup
    .object()
    .required("Contact is required")
    .shape({
      label: yup.string().required("Assigned Contact is required"),
      value: yup.string().required("Assigned Contact value is required"),
    })
    .nullable(),
  tag: yup
    .object()
    .shape({
      label: yup.string().required("Tags is required"),
      value: yup.string().required("Tags value is required"),
    })
    .required("Tag is required")
    .nullable(),
});
