import React from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { LOGIN_PATH, SIGNUP_PATH } from "components/routeConstants";

import {
  RESET_PASSWORD_FORM_INITIAL_VALUES,
  RESET_PASSWORD_FORM_VALIDATION_SCHEMA,
} from "./constants";

const ResetPassword = () => {
  const { t } = useTranslation();

  return (
    <div className="neeto-ui-bg-gray-100 flex h-screen w-screen flex-row items-center justify-center overflow-y-auto overflow-x-hidden p-6">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <h2 className="neeto-ui-text-gray-800 mb-5 text-center text-3xl font-extrabold">
          {t("forgot_password")}
        </h2>
        <div className="neeto-ui-text-gray-700 mb-5 -mt-4 w-2/3 text-center">
          {t("send_reset_email")}
        </div>
        <Formik
          initialValues={RESET_PASSWORD_FORM_INITIAL_VALUES}
          validationSchema={RESET_PASSWORD_FORM_VALIDATION_SCHEMA}
          onSubmit={() => null}
        >
          {({ isSubmitting }) => (
            <Form
              className="neeto-ui-rounded-md neeto-ui-bg-white neeto-ui-shadow-s w-full space-y-6 border p-8"
              id="new_user"
            >
              <Input
                required
                label={t("form.label.email")}
                name="email"
                type="email"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Button
                  fullWidth
                  className="h-8"
                  data-disable-with="Send reset password email"
                  disabled={isSubmitting}
                  label={t("button.label.send_email")}
                  loading={isSubmitting}
                  size="small"
                  type="submit"
                />
                <Button
                  label={t("button.label.back")}
                  size="small"
                  style="link"
                  to={LOGIN_PATH}
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-row items-center justify-start space-x-1">
          <p className="neeto-ui-text-gray-600 font-normal">{`Don't have an account?`}</p>
          <Button
            label={t("form.label.signup")}
            size="small"
            style="link"
            to={SIGNUP_PATH}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
