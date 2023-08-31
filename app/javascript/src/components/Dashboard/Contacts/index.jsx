import React, { useState } from "react";

import { Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import { CONTACTS_LIST, COLUMN_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import transformContactData from "./utils";

const Contacts = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showNewContactPain, setShowNewContactPain] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
        title={t("header.title", { entity: "Contacts" })}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("header.add", { entity: "Contact" })}
            size="small"
            onClick={() => setShowNewContactPain(true)}
          />
        }
        searchProps={{
          unlimitedChars: true,
          placeholder: t("header.search"),
        }}
      />
      <Table
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={currentPageNumber}
        defaultPageSize={10}
        handlePageChange={page => setCurrentPageNumber(page)}
        rowData={transformContactData(CONTACTS_LIST, t, setShowDeleteAlert)}
        onRowSelect={() => {}}
      />
      <NewContactPane
        setShowPane={setShowNewContactPain}
        showPane={showNewContactPain}
      />
      {showDeleteAlert && (
        <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
      )}
    </Container>
  );
};

export default Contacts;
