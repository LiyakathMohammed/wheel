import React from "react";

import moment from "moment";
import { Clock } from "neetoicons";
import { Tag, Avatar } from "neetoui";

import { useUserState } from "contexts/user";

const Card = ({ title, description, assignedContactId, tag, created_at }) => {
  const { user } = useUserState();

  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl bg-white shadow-md">
      <div className="w-full md:flex">
        <div className="w-full p-8">
          <p className="mt-1 inline-block text-lg font-medium leading-tight text-black">
            {title}
          </p>
          <p className="border-grey my-3 mt-2 block w-full border-b-2 pb-4 text-gray-600">
            {description}
          </p>
          <div className="flex w-full items-center justify-between">
            <Tag className="mt-2" label={tag} />
            <p className="mt-2 flex items-center text-sm text-gray-600">
              <Clock className="mr-1 h-4 w-4" />
              {moment
                .utc(created_at.created_at)
                .local()
                .startOf("seconds")
                .fromNow()}
              <Avatar
                className="ml-2"
                size="small"
                user={{
                  name: `${user.first_name} ${user.last_name} ${assignedContactId}`,
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
