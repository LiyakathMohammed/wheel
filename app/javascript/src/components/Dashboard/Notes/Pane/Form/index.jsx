import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import { TAGS } from "./constants";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../../constants";

const Form = ({ onClose, note, isEdit, setShowPane, notes, setNotes }) => {
  const handleSubmit = ({ title, description, assignedContact, tag }) => {
    const updatedNotes = [
      ...notes,
      {
        title,
        description,
        assignedContactId: assignedContact.value,
        tag: tag.value,
      },
    ];
    setNotes(updatedNotes);
    setShowPane(false);
  };

  const contactList = [
    {
      id: 1,
      name: "Elma Herring",
      email: "elmaherring@unq.com",
      phone: "+1 (913) 497-2020",
    },
    {
      id: 2,
      name: "Knapp Berry",
      email: "knappberry@unq.com",
      phone: "+1 (951) 472-2967",
    },
  ];

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
                className="w-full"
                label="Assign To"
                name="assignedContact"
                placeholder="Select Role"
                options={contactList.map(contact => ({
                  label: contact.name,
                  value: contact.id,
                }))}
              />
              <Select
                className="w-full pt-7"
                label="Tags"
                name="tag"
                placeholder="Select tag"
                strategy="fixed"
                options={TAGS.map(tag => ({
                  label: tag,
                  value: tag,
                }))}
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
