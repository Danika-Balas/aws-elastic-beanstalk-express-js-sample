const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello MSDS-498! If you can read this, this continuous delivery pipeline is fully hooked up!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
