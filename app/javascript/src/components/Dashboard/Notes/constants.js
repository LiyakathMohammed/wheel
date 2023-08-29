import * as yup from "yup";

export const NOTES_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContactId: "",
  tag: "",
};

export const NOTES_SEED_VALUES = {
  title: "How to Claim Warranty?",
  description:
    "Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. Description Goes Here. ",
  assignedContactId: "1",
  tag: "Getting Started",
};
export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  // tagsList: yup
  //   .array()
  //   .required("Please select a tag")
  //   .min(1, "Please select a tag"),
});

export const NOTES_TABLE_SCHEMA = [
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Description",
    key: "description",
    width: "70%",
  },
  // {
  //   title: "TagsList",
  //   dataIndex: "tagsList",
  //   key: "tagsList",
  //   width: "70%",
  // },
];
