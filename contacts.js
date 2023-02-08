const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументувати кожну функцію
function listContacts() {
  return fs
    .readFile(contactsPath, 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
}

function getContactById(contactId) {}

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
