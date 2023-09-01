import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const getCurrentDateTime = () => dayjs();

export const getUniqueId = () => uuidv4();
