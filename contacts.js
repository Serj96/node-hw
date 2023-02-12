const fs = require('fs').promises;
const path = require('path');
const { v4 } = require('uuid');
const contactsPath = path.join('./db/contacts.json');

// TODO: задокументувати кожну функцію

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async contactId => {
  const allContacts = await listContacts();
  const result = allContacts.find(
    contact => Number(contact.id) === Number(contactId)
  );
  return result ? result : null;
};

const removeContact = async contactId => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex(
    contact => Number(contact.id) === Number(contactId)
  );
  if (index === -1) {
    return null;
  }
    const newContacts = allContacts.filter((_, index) => index !== index);
    await updateContacts(newContacts);
    return allContacts[index];
};

const  addContact = async (name, email, phone) => {
    const allContacts = await listContacts();
    const newContact = {
        id: v4,
        name: name,
        email: email,
        phone: phone,
    }

    allContacts.push(newContact);
    await updateContacts(allContacts);
    return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
