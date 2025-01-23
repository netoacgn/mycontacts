const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Antonio',
    email: 'antonio@gmail.com',
    phone: '31998291355',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
