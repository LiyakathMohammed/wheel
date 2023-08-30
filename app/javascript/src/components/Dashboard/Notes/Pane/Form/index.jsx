import React from "react";

import dayjs from "dayjs";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import { TAG_OPTIONS, CONTACT_OPTIONS } from "./constants";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../../constants";

const Form = ({ onClose, note, isEdit, setShowPane, notes, setNotes }) => {
  const handleSubmit = ({ title, description, assignedContact, tag }) => {
    const updatedNotes = [
      ...notes,
      {
        title,
        description,
        assignedContact,
        tag,
        createdAt: dayjs(),
      },
    ];
    setNotes(updatedNotes);
    setShowPane(false);
    Toastr.success("Note has been added Successfully.");
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter Title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter Note Description"
            />
            <div className="w-full space-y-0">
              <Select
                isClearable
                required
                className="w-full"
                label="Assign To"
                name="assignedContact"
                options={CONTACT_OPTIONS}
                placeholder="Select Role"
              />
              <Select
                isClearable
                required
                className="w-full pt-7"
                label="Tags"
                name="tag"
                options={TAG_OPTIONS}
                placeholder="Select tag"
                strategy="fixed"
              />
            </div>
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              label={isEdit ? "Update" : "Save changes"}
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
