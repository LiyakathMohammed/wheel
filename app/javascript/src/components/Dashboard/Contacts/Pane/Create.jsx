import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ showPane, setShowPane }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("create", { entity: "Contact" })}
        </Typography>
      </Pane.Header>
      <Form setShowPane={setShowPane} onClose={onClose} />
    </Pane>
  );
};

export default Create;
