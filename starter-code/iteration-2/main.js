"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.addTask = function (task) {
            a.push(task);
            return a.length;
        };
        this.listAllTask = function () {
            a.forEach(function (e) {
                console.log(e);
            });
        };
        this.deleteTask = function (task) {
            var i = a.indexOf(task);
            a.splice(i, 1);
            return a.length;
        };
    }
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
