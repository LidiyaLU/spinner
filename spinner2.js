const spinner = ['|', '/', '-', '\\','|', '/', '-', '\\', '|', '/', '-', '\\'];
speed = 100;
for (let i = 0; i < spinner.length; i++) {

  setTimeout(() => {
    process.stdout.write('\r' + spinner[i] + "   ");// print the char here
  }, speed+=200);
};