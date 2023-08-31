import * as yup from "yup";

import i18n from "common/i18n";

export const LOGIN_FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const RESET_PASSWORD_FORM_INITIAL_VALUES = {
  email: "",
};

export const SIGNUP_FORM_INITIAL_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
};

export const LOGIN_FORM_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t("form.validation.invalid", { entity: "Email" }))
    .required(i18n.t("form.validation.required", { entity: "Email" })),
  password: yup.string().required("Required"),
});

export const RESET_PASSWORD_FORM_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t("form.validation.invalid", { entity: "Email" }))
    .required(i18n.t("form.validation.required", { entity: "Email" })),
});

export const SIGNUP_FORM_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t("form.validation.invalid", { entity: "Email" }))
    .required(i18n.t("form.validation.required", { entity: "Email" })),
  firstName: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "First Name" })),
  lastName: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "Last Name" })),
  password: yup
    .string()
    .required(i18n.t("form.validation.required", { entity: "Password" })),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      i18n.t("form.validation.match", { entity: "Paswords" })
    )
    .required(
      i18n.t("form.validation.required", { entity: "Confirm Password" })
    ),
});
