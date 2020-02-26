const fs= require('fs')
// const fs =require('fs')
// const name=function (a,b){
//     return a+b;
// }
/*const note=require('./notes.js');
const validator= require('validator');

const msg= note();
console.log(msg);

console.log(validator.isEmail('sudhancheckmi98@gmail.com'))
console.log(validator.isURL('http://google.com'))*/

// const chalk = require('chalk');

// console.log(chalk.green.inverse.bold('success!'));
// console.log(chalk.bold('sudhan')+' hello'+chalk.red(' have a')+chalk.bgGreen.underline(' great')+chalk.yellow(' day'));
// using process argv command :
// const command = process.argv[2]

// if(command ==='add')
//     console.log('adding notes..')

// if(command ==='remove')
//     console.log('removing notes..')

const party={
    name: "veerasudhan ",
    location: "chennai",
    Project: "note app" ,
}
const noteJSON= JSON.stringify(party)
console.log(noteJSON)
const parseJSON= JSON.parse(noteJSON)
console.log(parseJSON)

const attach= parseJSON.name.concat(parseJSON.location)
console.log(attach)
const strn= JSON.stringify(attach)
console.log(strn)

// let x = "a=1; b=2; c=3; d=4",
//     y = {}

// x.split(';').map(i => i.split('=')).forEach(j => y[j[0].trim()] = j[1])

// console.log(y)

// var obj = JSON.parse(jsonStr);
// obj['theTeam'].push({"teamId":"4","status":"pending"});
// jsonStr = JSON.stringify(obj);
