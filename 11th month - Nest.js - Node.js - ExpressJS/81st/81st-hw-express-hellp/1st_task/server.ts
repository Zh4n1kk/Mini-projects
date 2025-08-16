import express, { Request, Response } from 'express';

const app = express();

const port = 8000;
app.get('/', (req: Request, res: Response) => {
  res.send(`Address is empty`);
});

app.get('/:text', (req: Request, res: Response) => {
  res.send(`${req.params.text}`);
});

app.listen(port, () => {
  console.log(`We are live on ${port}`);
});
