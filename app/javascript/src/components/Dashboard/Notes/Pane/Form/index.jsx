import React from "react";

import dayjs from "dayjs";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import {
  TAG_OPTIONS,
  CONTACT_OPTIONS,
  NOTES_FORM_VALIDATION_SCHEMA,
  NOTES_FORM_INITIAL_VALUES,
} from "./constants";

const Form = ({ onClose, isEdit, setShowPane, notes, setNotes }) => {
  const { t } = useTranslation();
  const handleSubmit = ({ title, description, assignedTo, tag }) => {
    const updatedNotes = [
      ...notes,
      {
        title,
        description,
        assignedTo,
        tag,
        createdAt: dayjs(),
      },
    ];
    setNotes(updatedNotes);
    setShowPane(false);
    Toastr.success(t("toastr.success.create", { entity: "Note" }));
  };

  return (
    <Formik
      initialValues={NOTES_FORM_INITIAL_VALUES}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.label.title")}
              name="title"
              placeholder={t("form.placeholder.enter", { entity: "Title" })}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("form.label.description")}
              name="description"
              placeholder={t("form.placeholder.enter", {
                entity: "Title Description",
              })}
            />
            <div className="w-full space-y-0">
              <Select
                isClearable
                required
                className="w-full"
                label={t("form.label.assign_to")}
                name="assignedTo"
                options={CONTACT_OPTIONS}
                placeholder={t("form.placeholder.select", {
                  entity: "Contact",
                })}
              />
              <Select
                isClearable
                required
                className="w-full pt-7"
                label={t("form.label.tag")}
                name="tag"
                options={TAG_OPTIONS}
                placeholder={t("form.placeholder.select", { entity: "Tag" })}
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
