import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ showPane, setShowPane, notes, setNotes }) => {
  const onClose = () => setShowPane(false);

  const { t } = useTranslation();

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("create", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        notes={notes}
        setNotes={setNotes}
        setShowPane={setShowPane}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
