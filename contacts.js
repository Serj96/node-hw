const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join('./db/contacts.json');

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  const result = await fs.readFile(contactsPath);
  return JSON.parse(result);
};

const getContactById = async id => {
  const contacts = await listContacts();
  const result = await contacts.find(contact => contact.id === id);
  if (!result) {
    return null;
  }
  return result;
};

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
