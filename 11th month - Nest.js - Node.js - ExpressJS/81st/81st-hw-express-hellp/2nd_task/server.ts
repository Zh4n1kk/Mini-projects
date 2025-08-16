import express, { Request, Response } from 'express';

const app = express();

const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

app.get('/', (req: Request, res: Response) => {
  res.send(`Address is empty`);
});

app.get('/encode/:text', (req: Request, res: Response) => {
  res.send(`${Vigenere.Cipher('password').crypt(req.params.text)}`);
});

app.get('/decode/:text', (req: Request, res: Response) => {
  res.send(`${Vigenere.Decipher('password').crypt(req.params.text)}`);
});

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});
