import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { ROLE_OPTIONS } from "./constants";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const Form = ({ onClose, contacts, setShowPane }) => {
  const { t } = useTranslation();
  const handleSubmit = () => {
    setShowPane(false);
    Toastr.success(t("toastr.success.create", { entity: "Contact" }));
  };

  return (
    <Formik
      initialValues={contacts}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.label.first_name")}
              name="firstName"
              placeholder={t("form.placeholder.enter", {
                entity: "First Name",
              })}
            />
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.label.last_name")}
              name="lastName"
              placeholder={t("form.placeholder.enter", { entity: "Last Name" })}
            />
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.label.email")}
              name="email"
              placeholder={t("form.placeholder.enter", { entity: "Email" })}
            />
            <div className="w-full space-y-0">
              <Select
                isClearable
                required
                className="w-full"
                label={t("form.label.role")}
                name="role"
                options={ROLE_OPTIONS}
                placeholder={t("form.placeholder.select", { entity: "Role" })}
              />
            </div>
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              label="Save Contact"
              style="primary"
              type="submit"
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
