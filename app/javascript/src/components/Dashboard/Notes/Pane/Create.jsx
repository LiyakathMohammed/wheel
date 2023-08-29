import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_VALUES } from "../constants";

const Create = ({ showPane, setShowPane, notes, setNotes }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a new note
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={NOTES_FORM_INITIAL_VALUES}
        notes={notes}
        setNotes={setNotes}
        setShowPane={setShowPane}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
