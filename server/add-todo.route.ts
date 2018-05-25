import {Request, Response} from 'express';
import {TODOS} from './db-data';


const db = require('./db');

export function addTodo(req: Request, res: Response){
  console.log('req body', req.body);
  res.status(200).json({status:'success'});
}

