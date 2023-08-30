import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Button, Table, Dropdown } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_LIST, COLUMN_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";

const Contacts = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showNewContactPain, setShowNewContactPain] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
            onClick={() => setShowNewContactPain(true)}
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
        handlePageChange={page => setCurrentPageNumber(page)}
        rowData={CONTACTS_LIST.map(contact => ({
          ...contact,
          icon_button: (
            <Dropdown
              className="inline-block"
              customTarget={<MenuVertical className="mx-auto cursor-pointer" />}
              label="Dropdown"
              onClose={function noRefCheck() {}}
            >
              <Dropdown.Menu>
                <Dropdown.MenuItem.Button>Edit</Dropdown.MenuItem.Button>
                <Dropdown.MenuItem.Button
                  onClick={() => setShowDeleteAlert(true)}
                >
                  Delete
                </Dropdown.MenuItem.Button>
              </Dropdown.Menu>
            </Dropdown>
          ),
          name: (
            <div className="flex items-center" key={contact.id}>
              <Avatar
                className="mr-2 inline"
                size="medium"
                user={{
                  imageUrl: "https://i.pravatar.cc/300",
                  name: "neeto",
                }}
                onClick={() => {}}
              />
              <div>
                <span className="block">{contact.name}</span>
                <span className="block text-gray-500">{contact.role}</span>
              </div>
            </div>
          ),
        }))}
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
