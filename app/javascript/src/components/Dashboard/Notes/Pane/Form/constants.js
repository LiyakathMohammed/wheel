import { CONTACTS_LIST } from "components/Dashboard/Contacts/constants";

const TAGS = ["Getting Started", "Onboarding", "User Flow", "UX", "Bugs", "V2"];

export const TAG_OPTIONS = TAGS.map(tag => ({
  label: tag,
  value: tag,
}));

export const CONTACT_OPTIONS = CONTACTS_LIST.map(contact => ({
  label: contact.name,
  value: contact.id,
}));
