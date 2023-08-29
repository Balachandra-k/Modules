const vm = require('vm')

//original object

let user = {
    name: 'balu',
    email : "balu@gmail.com",
    Mobile : "7483020025",
    age :  "18"

}
console.log('before = ',user)

//vertual object

vm.createContext(user)
vm.runInContext(`name="john"; email= "john@gmail.com";age+=3;`,user)

console.log('after=',user)