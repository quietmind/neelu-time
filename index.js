#!/usr/bin/env node
console.log('Hello, world!');

var time = new Date();

var aussieTime = (time.getHours() -16 ) + ":" + time.getMinutes()

console.log(aussieTime)