const express = require( 'express');

const app = express();

const port = 8000;



let messages = []

app.get('/', (req, res) => {
  res.send('Hello, world!\n');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.post('/message', (req,res) => {
  try {
    if (req.body.messages) {
      messages.push(req.body.messages)
      res.status(201).send('Message was created!')
    }  else {
      res.status(404).send('Wrong format message :(')
    }
  } catch(err) {
      res.send(err)
    }
})

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});