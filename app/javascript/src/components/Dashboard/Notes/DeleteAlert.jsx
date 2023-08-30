import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ onClose }) => {
  const { t } = useTranslation();

  const handleDelete = () => {
    Toastr.success(t("toastr.success.delete", { entity: "Note" }));
    onClose();
  };

  return (
    <Alert
      isOpen
      message={t("alert.message")}
      title={t("alert.title", { entity: "Note" })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
