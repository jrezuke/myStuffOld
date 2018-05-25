

import * as express from 'express';
import {Application} from 'express';
import {getAllTodos} from './get-todos.route';
import {addTodo} from './add-todo.route';
import {searchLessons} from './search-lessons.route';


const app: Application = express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.route('/api/todos').get(getAllTodos);
app.route('/api/todos').post(addTodo);

// app.route('/api/courses/:id').get(getCourseById);
//
app.route('/api/lessons').get(searchLessons);




const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});




