import * as yup from "yup";

import i18n from "common/i18n";

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
    .required(i18n.t("form.validation.required", { entity: "Title" })),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .required(i18n.t("form.validation.required", { entity: "Description" })),
  assignedContact: yup
    .object()
    .required(i18n.t("form.validation.required", { entity: "Contact" }))
    .shape({
      label: yup
        .string()
        .required(
          i18n.t("form.validation.required", { entity: "Assigned Contact" })
        ),
      value: yup.string().required(
        i18n.t("form.validation.required", {
          entity: "Assigned Contact Value",
        })
      ),
    })
    .nullable(),
  tag: yup
    .object()
    .shape({
      label: yup.string().required(
        i18n.t("form.validation.required", {
          entity: "Tag",
        })
      ),
      value: yup.string().required(
        i18n.t("form.validation.required", {
          entity: "Tag Value",
        })
      ),
    })
    .required(
      i18n.t("form.validation.required", {
        entity: "Tag",
      })
    )
    .nullable(),
});
