import React from "react";

import { Pane, Typography } from "neetoui";

import { CONTACTS_FORM_INITIAL_VALUES } from "./constants";
import Form from "./Form";

const Create = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a new Contact
        </Typography>
      </Pane.Header>
      <Form
        contacts={CONTACTS_FORM_INITIAL_VALUES}
        setShowPane={setShowPane}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
