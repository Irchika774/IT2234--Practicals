const fs = require('fs').promises;

fs.readFile('file.txt', 'utf-8')
  .then(data => console.log('File Content:', data))
  .catch(err => console.error('Error:', err));
