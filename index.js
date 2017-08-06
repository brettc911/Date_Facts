const moment = require('moment');
const chalk = require('chalk');

var leapYear = moment().isLeapYear()
var dayLight = moment().isDST()

var leap = (type)=>{
  if (type == true) {
    return "is"
  } return "is not"
}

console.log(`It is ${chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}.`)
console.log(`It is the ${chalk.magenta(moment().format("DDDo"))} day of the year`)
console.log(`It is ${chalk.cyan((moment().hour()*60*60)+(moment().minutes()*60)+(moment().seconds()))} seconds into the day`)
console.log(`It ${chalk.green(leap(dayLight))} day light savings`)
console.log(`It ${chalk.red(leap(leapYear))} a leap year`)
