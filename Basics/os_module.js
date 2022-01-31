// Going through the documentation
//  https://nodejs.org/api/os.html#oseol

const os = require('os');

const userInfo = os.userInfo();

console.log(`Hello ${userInfo.username}!`);
// Getting individual properties from the user object
console.log(`User GID is ${userInfo.gid}`);
console.log(`User UID is ${userInfo.uid}`);
console.log(`User Shell is ${userInfo.shell}`);
console.log(`User Home is ${userInfo.homedir}`);

const EOL = os.EOL; // End of line
console.log(`End of line is ${EOL}`);

const arch = os.arch();
console.log(`Architecture is ${arch}`);

const cpus = os.cpus();
console.log(`CPUs are ${cpus}`);

// CPUs are [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object] // Empty object to Mac M1?

const homeDir = os.homedir();
console.log(`Home directory is ${homeDir}`);

const hostname = os.hostname();
console.log(`Hostname is ${hostname}`);

const loadavg = os.loadavg();
console.log(`Load average is ${loadavg}`);

const networkInterfaces = os.networkInterfaces();
console.log(`Network interfaces are ${networkInterfaces}`);

//Network interfaces are [object Object]

const platform = os.platform();
console.log(`Platform is ${platform}`);  // Platform is darwin

const release = os.release();
console.log(`Release is ${release}`);

const tmpDir = os.tmpdir();
console.log(`Temporary directory is ${tmpDir}`);

const totalmem = os.totalmem();
console.log(`Total memory is ${totalmem}`); // Total memory is 8589934592

const type = os.type();
console.log(`Type is ${type}`);

const uptime = os.uptime();
console.log(`Uptime is ${uptime}`); // Uptime is 22310

const version = os.version();
console.log(`Version is ${version}`);

const osconstants = os.constants.signals;
console.log(`OS constants are ${osconstants.SIGSYS}`);



