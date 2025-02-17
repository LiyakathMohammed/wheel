import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Tag, Avatar, Tooltip, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

import { useUserState } from "contexts/user";

import { getElapsedTime, formatTime } from "./utils";

const Card = ({
  id,
  title,
  description,
  assignedTo,
  tag,
  createdAt,
  setShowDeleteAlert,
  setDeleteNoteId,
}) => {
  const { user } = useUserState();
  const { t } = useTranslation();
  const { Menu, MenuItem } = Dropdown;
  const { Button } = MenuItem;

  const handleDelete = () => {
    setDeleteNoteId(id);
    setShowDeleteAlert(true);
  };

  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl bg-white shadow-md">
      <div className="justify-content-between w-full md:flex">
        <div className="w-full p-8">
          <p className="mt-1 inline-block text-lg font-medium leading-tight text-black">
            {title}
          </p>
          <div className="float-right inline-block">
            <Dropdown
              className="inline-block"
              label="Dropdown"
              customTarget={
                <MenuVertical className="float-right cursor-pointer" />
              }
            >
              <Menu>
                <Button>{t("edit")}</Button>
                <Button onClick={handleDelete}>{t("delete")}</Button>
              </Menu>
            </Dropdown>
          </div>
          <p className="border-grey my-3 mt-2 block w-full border-b-2 pb-4 text-gray-600">
            {description}
          </p>
          <div className="flex w-full items-center justify-between">
            <Tag className="mt-2" label={tag.value} />
            <p className="mt-2 flex items-center text-sm text-gray-600">
              <Clock className="mr-1 h-4 w-4" />
              <Tooltip content={formatTime(createdAt)} position="bottom">
                {getElapsedTime(createdAt)}
              </Tooltip>
              <Avatar
                className="ml-2"
                size="small"
                user={{
                  name: `${user.first_name} ${user.last_name} ${assignedTo.value}`,
                  imageUrl: user.profile_image_path,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
