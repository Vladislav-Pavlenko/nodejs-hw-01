import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const contactList = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(contactList);
};

console.log(await getAllContacts());
