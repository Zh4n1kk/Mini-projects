"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var name = readline_sync_1.default.question("What's your name? \n");
console.log("Hello! ".concat(name));
while (true) {
    var answer = readline_sync_1.default.question('Your age?\n');
    var age = parseInt(answer);
    if (!isNaN(age)) {
        console.log("Your age is ".concat(age));
        break;
    }
}
// console.log('Hello World!')
var isActive = true;
isActive = false;
var num = null;
var str = 'Hello';
var arr = [5, 1];
var arr2 = [5, 2, 5];
var arr3 = [true, 2, 'Hello'];
arr3[2].toLowerCase();
var person = {
    name: 'jani',
    job: 'Dev',
    isActive: true
};
var persons = [{
        name: 'John',
        job: 'Dev',
        isActive: false
    }];
persons[0];
var allTypes = [5, 'String', true];
var getRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(getRandomNum(50, 55));
var grades = [9.4, 9, 10.7, 6.8, 10, 9.1, 9, 11];
var overallGrades = 0;
grades.forEach(function (grade) {
    overallGrades += grade;
});
console.log(overallGrades / 8 * 10);
// Приведение типов & ENUM
var myStr = "I'm a string"; // response from server
var lengthOfStr = myStr.length;
var lengthOfStr2 = myStr.length;
// const myName = 'jani'
// (myName as any).push('Test')
var Status;
(function (Status) {
    Status[Status["OK"] = 0] = "OK";
    Status[Status["NOT_OK"] = 1] = "NOT_OK";
    Status[Status["I_DONT_KNOW"] = 2] = "I_DONT_KNOW";
})(Status || (Status = {}));
var status2 = 'not ok';
status2 = 'ok';
console.log(Status.NOT_OK);
