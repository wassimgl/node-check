const myModule = require('./myModule.js')
const directory = process.argv[2];
const extension = process.argv[3];
yModule(directory, extension, (err, filteredList) => {
    if (err) return console.error(err);
    filteredList.forEach(file => {
      console.log(file);
    });
  });