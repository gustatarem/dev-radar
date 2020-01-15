const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {

  return res.json({ message: 'Hello omnistack' });

});

app.listen(3333);