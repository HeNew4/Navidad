import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';
import { routes } from './src/routes';

const app: Express = express();
const port = 3000;

// CSS
app.use(express.static(__dirname+'/public'))

app.get('/', (req: Request, res: Response) => {  
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/zander', routes.zander)
app.get('/ian', routes.ian)
app.get('/yankel', routes.yankel)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname+'/view/404.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});