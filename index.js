// "global" and "process" are true global objects. Other properties we have access to are passed into each module by Node nd are therefore available in every module, but are local to that module

// This is what the "invisible" function looks like that Node wraps around every js file. We never see this or modify it. This is just so you can get a visual fix on what's going on in a Node module
// (function (exports, require, module, __filename, __dirname) {
    //The code we write will be here
// });

console.log("This is a module in my Node.js application");

// See the top level global object
console.log("the whole enchilada", process);

// See the process object and inspect it for things we will use often,
// like argv, stdout, stdin
console.log("the current running Node envoronment", process);

// argv holds whatever we typed in the terminal to launch the application, like "node main.js hello"
console.log("the arguments", process.argv);
let name = process.argv[2];
console.log(`Hello, ${name}`);

// capture multiple args, no matter how many, using destructuring assignment
let [, , ...myArgs] = process.argv;

// quit the app whenever we want. Nothing will run after this
// process.exit();

let name = "Larry";
console.log("Name printed using console.log", name);
process.stdout.write(`Name printed with stdout: ${name}\n`);

// Listen for an even emitted by 'process'. Process will exit at end of file without being asked to. Ain't that nice?
process.on("exit", () => {
  console.log("About to quit");
});
