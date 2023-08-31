import * as yup from "yup";

import i18n from "common/i18n";
import { CONTACTS_LIST } from "components/Dashboard/Contacts/constants";

const TAGS = ["Getting Started", "Onboarding", "User Flow", "UX", "Bugs", "V2"];

export const TAG_OPTIONS = TAGS.map(tag => ({
  label: tag,
  value: tag,
}));

export const CONTACT_OPTIONS = CONTACTS_LIST.map(contact => ({
  label: contact.name,
  value: contact.id,
}));

export const NOTES_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedTo: null,
  tag: null,
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
  assignedTo: yup
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
