

import {Request, Response} from 'express';
import {TODOS} from "./db-data";

const db = require('./db');

export function getAllTodos(req: Request, res: Response) {

    db.any('select * from todo')
        .then(function(data){
            res.status(200).json({status:'success', data:data})
        })
        .catch(function(err){
            console.log("error", err);
        });
    

}


// export function getCourseById(req: Request, res: Response) {

//     const courseId = req.params["id"];

//     const courses = Object.values(COURSES);

//     const course = courses.find(course => course.id == courseId);

//     res.status(200).json(course);
// }