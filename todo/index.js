import "./styles.css";

//rquire express
const express = require('express');
//require bodyparser
const bodyParser = require("body-parser");
//rquire db
const db = require('./config/mongoose');
const Tasks = require('./models/tasktodo');
const app = express();
//setting port
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
// use ejs as view engine
app.set('view engine', 'ejs');
app.use(express.static('assests'));
//setting up of port
app.listen(port, function(err) {
    if (err) {
        console.log(err, "Error in listening to requests");
    }

    console.log("Connected to server at port", port);
});
// Fetching Tasks
app.get('/', function(req, res) {
    Tasks.find({}, function(err, tasks) {
        if (err) {
            console.log("Error in fetching Tasks");
        }
        
        res.render('home', {
            title: 'TODOList',
            tasks: tasks
        });
    });

});
// creating task controller
app.post('/add-task', function(req, res) {
    Tasks.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    }, function(err, newTask) {
        if (err) {
            console.log('Error in creating a task');
            return;
        }
        return res.redirect('back');
    });
});
//deleting task controller
app.get('/delete-task/', function(req, res) {
    console.log(req.query);
    var id = req.query;

    // to check the number of tasks to be deleted
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        //Deleting the task from the database by using their individual ids
        Tasks.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log("Error in deleting the task from DB");
            }
        });
        console.log("Task-Deleted");
    }
    return res.redirect('back');
});
