import React from "react";

import { Clock, Delete } from "neetoicons";
import { Tag, Avatar, Tooltip } from "neetoui";

import { useUserState } from "contexts/user";
import { getElapsedTime, formatTime } from "utils/time";

const Card = ({
  title,
  description,
  assignedContact,
  tag,
  created_at,
  setShowDeleteAlert,
}) => {
  const { user } = useUserState();

  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl bg-white shadow-md">
      <div className="w-full md:flex">
        <div className="w-full p-8">
          <p className="mt-1 inline-block text-lg font-medium leading-tight text-black">
            {title}
          </p>
          <Delete
            className="inline-block"
            onClick={() => setShowDeleteAlert(true)}
          />
          <p className="border-grey my-3 mt-2 block w-full border-b-2 pb-4 text-gray-600">
            {description}
          </p>
          <div className="flex w-full items-center justify-between">
            <Tag className="mt-2" label={tag.value} />
            <p className="mt-2 flex items-center text-sm text-gray-600">
              <Clock className="mr-1 h-4 w-4" />
              <Tooltip content={formatTime(created_at)} position="bottom">
                {getElapsedTime(created_at)}
              </Tooltip>
              <Avatar
                className="ml-2"
                size="small"
                user={{
                  name: `${user.first_name} ${user.last_name} ${assignedContact.value}`,
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
