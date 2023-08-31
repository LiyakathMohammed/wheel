import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Avatar } from "neetoui";

const transformContactData = (contacts, t, setShowDeleteAlert) =>
  contacts.map(contact => ({
    ...contact,
    icon_button: (
      <Dropdown
        className="inline-block"
        customTarget={<MenuVertical className="mx-auto cursor-pointer" />}
        onClose={function noRefCheck() {}}
      >
        <Dropdown.Menu>
          <Dropdown.MenuItem.Button>{t("edit")}</Dropdown.MenuItem.Button>
          <Dropdown.MenuItem.Button onClick={() => setShowDeleteAlert(true)}>
            {t("delete")}
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
  }));

export default transformContactData;
