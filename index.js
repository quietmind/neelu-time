#!/usr/bin/env node
var moment = require('moment-timezone');
var aussieTime = moment().tz("Australia/Sydney").format('h:mm:ss a, MMMM Do')
console.log(aussieTime);