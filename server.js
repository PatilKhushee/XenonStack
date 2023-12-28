// In server.js
const path = require('path');

// ...

// Assuming 'app.js' is in the same directory
app.use(express.static(path.join(__dirname, 'app.js')));

// ...
