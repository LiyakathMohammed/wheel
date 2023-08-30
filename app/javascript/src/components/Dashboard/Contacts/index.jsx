import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Button, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_LIST, COLUMN_DATA } from "./constants";

const Contacts = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  // const [showNewContactPane, setShowNewContactPane] = useState(false);

  const handlePageChange = page => setCurrentPageNumber(page);

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
        title="Contacts"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add Contact"
            size="small"
            // onClick={() => setShowNewContactPane(true)}
          />
        }
        searchProps={{
          unlimitedChars: true,
          placeholder: "Search Contacts",
        }}
      />
      <Table
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={currentPageNumber}
        defaultPageSize={10}
        handlePageChange={handlePageChange}
        rowData={CONTACTS_LIST.map(contact => ({
          ...contact,
          icon_button: <MenuVertical className="mx-auto" />,
          name: [
            <Avatar
              className="mr-2 inline"
              key={contact.id}
              size="medium"
              user={{
                imageUrl: "https://i.pravatar.cc/300",
                name: "neeto",
              }}
              onClick={function noRefCheck() {}}
            />,
            contact.name,
          ],
        }))}
        onRowSelect={function noRefCheck() {}}
      />
    </Container>
  );
};

export default Contacts;
