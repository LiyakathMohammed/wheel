import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const getElapsedTime = createdAt => {
  const createdTime = dayjs(createdAt);

  return createdTime.fromNow();
};

const formatTime = createdAt => dayjs(createdAt).format("dddd, h:mm a");

export { getElapsedTime, formatTime };
