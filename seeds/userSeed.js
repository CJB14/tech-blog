const { User } = require('../models');

const userdata =
[
  {
    "username": "CJB",
    "password": "Killacam14",
    "email": "APA1906@gmail.com"
  },
  {
    "username": "Ten2cold",
    "password": "Ithica1906",
    "email": "Phrozen06@hotmail.com"
  },
  {
    "username": "Dime",
    "password": "TenaciousPhenom",
    "email": "Ifyouknowyou@msn.com"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
