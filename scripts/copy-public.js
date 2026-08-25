const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'public');
const dest = path.resolve(__dirname, '..', 'dist', 'ressutti-portfolio', 'browser');

fs.cpSync(src, dest, { recursive: true });

console.log(`✔ Copied "${src}" → "${dest}"`);
