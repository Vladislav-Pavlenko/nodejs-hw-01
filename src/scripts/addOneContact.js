import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const contact = createFakeContact();
  const contactList = await getAllContacts();
  contactList.push(contact);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

addOneContact();
