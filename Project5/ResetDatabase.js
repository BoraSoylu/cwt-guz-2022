import { copyFile } from 'fs';
// destination will be created or overwritten by default.
copyFile('./ProjectFiles/data.json', './data.json', (err) => {
  if (err) throw err;
  console.log('File was copied to destination');
});
