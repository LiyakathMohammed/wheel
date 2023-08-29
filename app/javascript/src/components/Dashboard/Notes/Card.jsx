import React from "react";

import moment from "moment";
import { Clock } from "neetoicons";
import { Tag, Avatar } from "neetoui";

import { useUserState } from "contexts/user";

const Card = created_at => {
  const { user } = useUserState();

  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl bg-white shadow-md">
      <div className="md:flex">
        <div className="p-8">
          <p className="mt-1 block text-lg font-medium leading-tight text-black">
            How to claim the Warranty?
          </p>
          <p className="border-grey my-3 mt-2 block border-b-2 pb-4 text-gray-600">
            Description of the card goes here. You can provide a brief overview
            of the content.Description of the card goes here. You can provide a
            brief overview of the content. You can provide a brief overview of
            the content.
          </p>
          <div className="justify-between md:flex">
            <Tag className="mt-2" label="Label" />
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
                  name: `${user.first_name} ${user.last_name}`,
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
