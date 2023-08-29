const util = require('util')

//templates

let myTemplate = `Hi %s ,Welcome to %s and duration is %d months`

let u1 = util.format(myTemplate, "balu","javasacript", 1.5)
let u2 = util.format(myTemplate, "subbu","javasacript", 1)

console.log('u1 =',u1)
console.log('u2=' ,u2)