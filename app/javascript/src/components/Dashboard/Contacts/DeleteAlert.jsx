import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    Toastr.success("Contact Deleted Successfully");
    onClose();
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
