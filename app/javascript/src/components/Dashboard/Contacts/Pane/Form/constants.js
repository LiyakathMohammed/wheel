import * as yup from "yup";

import i18n from "common/i18n";

const ROLES = ["Owner", "Admin", "Developer"];

export const ROLE_OPTIONS = ROLES.map(role => ({ label: role, value: role }));

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "First Name" })),
  lastName: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "Last Name" })),
  email: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "Email" })),
  role: yup
    .object()
    .shape({
      label: yup
        .string()
        .required(i18n.t("form.validation.required", { entity: "Role" })),
      value: yup
        .string()
        .required(i18n.t("form.validation.required", { entity: "Role value" })),
    })
    .required(i18n.t("form.validation.required", { entity: "Role" }))
    .nullable(),
});

export const CONTACTS_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};
