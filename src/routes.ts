import express, { Express, Request, Response } from 'express';
import path from 'path';
const app: Express = express();

export const routes = {
   zander: (req: Request, res: Response) => {
      res.send('Zader')
   },
   ian: (req: Request, res: Response) => {
      res.send('Ian')
   },
   yankel: (req: Request, res: Response) => {
      res.send('Yankel')
   },
}