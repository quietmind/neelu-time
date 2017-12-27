#!/usr/bin/env node
var moment = require('moment-timezone');
var aussieTime = moment().tz("Australia/Melbourne").format('h:mm a, MMM Do')
var output = "                                               Neelu Time: " + aussieTime 
console.log(output);