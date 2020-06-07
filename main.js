#!/usr/bin/env node
process.stdout.write('\033c'); // Clear screen

// Imports
const config = require("./config.js");
var start = "";

// Global Variables
// none for now

// Main
if(config.USED_PROGRAMMING_LANGUAGE.toLowerCase() == "php"){
	start = require("./langs/php");
}
else if(config.USED_PROGRAMMING_LANGUAGE.toLowerCase() == "c#"){
	//start = require("./langs/c#");
}
else {
	console.log();
	consol.log("Invalid chosen programming language, exiting..");
	process.exit();
}

if(start != ""){
	new start();
}

