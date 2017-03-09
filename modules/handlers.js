"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');


exports.sample = (sender) => {
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Please send location`}, sender);
    });
};

exports.test = (sender) => {
    messenger.send({text: `Hello`}, sender);
};

exports.hello = (sender) => {
    console.log('hello');
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hello, ${response.first_name}! I am your Northen Trail assistant.`}, sender);
        setTimeout(function(){ 
            messenger.send({text: `I'm just a humble chatbot, really. But you can talk to my human pals at any time by typing “help”.`}, sender);
        }, 2000);
        setTimeout(function(){ 
            messenger.send(formatter.challenge(response), sender);
        }, 3000);
        
        
    });
};
