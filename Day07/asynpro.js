const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('File Content:', data);
});
