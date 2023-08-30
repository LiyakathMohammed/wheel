import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Button, Table, Dropdown } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_LIST, COLUMN_DATA } from "./constants";

const Contacts = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const handlePageChange = page => setCurrentPageNumber(page);

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
        title="Contacts"
        actionBlock={
          <Button icon="ri-add-line" label="Add Contact" size="small" />
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
          icon_button: (
            <Dropdown
              buttonProps={{}}
              className="inline-block"
              customTarget={<MenuVertical className="mx-auto cursor-pointer" />}
              label="Dropdown"
              onClose={function noRefCheck() {}}
            >
              <Dropdown.Menu>
                <Dropdown.MenuItem.Button>Edit</Dropdown.MenuItem.Button>
                <Dropdown.MenuItem.Button>Delete</Dropdown.MenuItem.Button>
              </Dropdown.Menu>
            </Dropdown>
          ),
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
