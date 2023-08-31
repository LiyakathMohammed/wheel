import React from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import authenticationApi from "apis/authentication";
import { LOGIN_PATH } from "components/routeConstants";

import {
  SIGNUP_FORM_INITIAL_VALUES,
  SIGNUP_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Signup = ({ history }) => {
  const { t } = useTranslation();

  const handleSubmit = async formData => {
    try {
      await authenticationApi.signup(formData);
      history.push(LOGIN_PATH);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="neeto-ui-bg-gray-100 flex h-screen w-screen flex-row items-center justify-center overflow-y-auto overflow-x-hidden p-6">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <h2 className="neeto-ui-text-gray-800 mb-5 text-center text-3xl font-extrabold">
          {t("signup")}
        </h2>
        <Formik
          initialValues={SIGNUP_FORM_INITIAL_VALUES}
          validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="neeto-ui-rounded-md neeto-ui-bg-white neeto-ui-shadow-s w-full space-y-6 border p-8">
              <Input
                required
                label={t("form.label.email")}
                name="email"
                placeholder={t("form.placeholder.example_email")}
                type="email"
              />
              <Input
                required
                label={t("form.label.first_name")}
                name="firstName"
                placeholder={t("form.placeholder.example_first_name")}
                type="text"
              />
              <Input
                required
                label={t("form.label.last_name")}
                name="lastName"
                placeholder={t("form.placeholder.example_last_name")}
                type="text"
              />
              <Input
                required
                label={t("form.label.password")}
                name="password"
                placeholder={t("form.placeholder.password")}
                type="password"
              />
              <Input
                required
                label={t("form.label.confirm_password")}
                name="passwordConfirmation"
                placeholder={t("form.placeholder.password")}
                type="password"
              />
              <Button
                fullWidth
                className="h-8"
                disabled={isSubmitting}
                label={t("form.label.signup")}
                loading={isSubmitting}
                size="small"
                type="submit"
              />
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-row items-center justify-start space-x-1">
          <p className="neeto-ui-text-gray-600 font-normal">
            {t("already_have_account")}
          </p>
          <Button
            label={t("button.label.login")}
            size="small"
            style="link"
            to={LOGIN_PATH}
          />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
