const fs = require('fs').promises;

async function readFiles() {
    try {
        const file1 = await fs.readFile('file.txt', 'utf-8');
        const file2 = await fs.readFile('data.txt', 'utf-8');
        console.log('File 1:', file1);
        console.log('File 2:', file2);
    } catch (err) {
        console.error('Error:', err);
    }
}

readFiles();
