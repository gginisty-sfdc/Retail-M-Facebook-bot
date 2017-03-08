"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.camprelax = (sender) => {
	console.log('camprelax');
    messenger.send({text: `camprelax`}, sender);
};

exports.climbmountain = (sender) => {
    console.log('climbmountain');
    messenger.send({text: `climbmountain`}, sender);
};

exports.perfectclimbing = (sender) => {
    console.log('perfectclimbing');
    messenger.send({text: `perfectclimbing`}, sender);
};

