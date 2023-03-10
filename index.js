const { program } = require('commander')

const contactsOperation = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const contacts = await contactsOperation.listContacts();
            console.log(contacts);
            break;
        
        case "get":
            const contact = await contactsOperation.getContactById(id);
            if (!contact) {
                throw new Error(`Contact with id ${id} not found`)
            }
            console.log(contact);
            break;
        
        case "add":
            const newContact = await contactsOperation.addContact(
                name,
                email,
                phone
            );
            console.log(newContact);
            break;
        
        case "remove":
            const removeContact = await contactsOperation.removeContact(id)
            console.log(removeContact);
            break
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}


program
  .option('-a, --action <type>', 'contacts operation')
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);

const options = program.opts();
invokeAction(options);