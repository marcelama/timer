//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// Example usage: node timer1.js 10 3 5 15 9 
const alarms = process.argv.slice(2);

for (let i = 0; i < alarms.length; i++) {
  if (alarms[i] > 0 || typeof alarms[i] === "number"){
   setTimeout(() => {
  process.stdout.write('\x07');
  }, (alarms[i])*1000);
  }
};
