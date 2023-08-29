import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    Toastr.success("Note Deleted Successfully");
    onClose();
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
