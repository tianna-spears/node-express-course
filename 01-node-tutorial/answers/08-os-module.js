//
const os = require('os');

 // method to invoke information about current user 
 // print to the console
const user = os.userInfo()
console.log(user)

// method to return interesting operating system

const currentSystem = {
    name: os.type(),
    platform: os.platform(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostName: os.hostname(),
}

console.log(currentSystem);