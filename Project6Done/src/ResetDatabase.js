const fs = require('fs');
// destination will be created or overwritten by default.
fs.copyFile('./ProjectFiles/data.json', './data.json', (err) => {
  if (err) throw err;
  console.log('File was copied to destination');
});
