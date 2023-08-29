import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import { TAGS } from "./constants";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const handleSubmit = values => {
    // eslint-disable-next-line no-console
    console.log(values);
    refetch;
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
            />
            <Select
              isMulti
              className="w-full"
              label="Tags"
              name="ValueList"
              placeholder="Select tags - You can choose multiple"
              options={TAGS.map(tag => ({
                label: tag,
                value: tag,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
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
