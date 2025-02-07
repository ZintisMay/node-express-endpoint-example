const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const jsonData = req.body;
  let status = jsonData ? 'data received' : 'no data received';

  console.log(jsonData);

  res.json({
    status,
    data: jsonData,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
