import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { ROLE_OPTIONS } from "./constants";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const Form = ({ onClose, contacts, setShowPane }) => {
  const handleSubmit = () => {
    setShowPane(false);
    Toastr.success("Contact has been added Successfully.");
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
              label="First Name"
              name="firstName"
              placeholder="Enter First Name"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Last Name"
              name="lastName"
              placeholder="Enter Last Name"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter Email"
            />
            <div className="w-full space-y-0">
              <Select
                isClearable
                required
                className="w-full"
                label="Assign To"
                name="role"
                options={ROLE_OPTIONS}
                placeholder="Select Role"
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
