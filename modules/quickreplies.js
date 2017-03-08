"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.camprelax = (sender) => {
	console.log('camprelax');
    messenger.send(formatter.easyone(response), sender);
    //messenger.send({text: `camprelax`}, sender);
};

exports.climbmountain = (sender) => {
    console.log('climbmountain');
};

exports.perfectclimbing = (sender) => {
    console.log('perfectclimbing');
};

exports.browseproducts = (sender) => {
    console.log('browseproducts');
    salesforce.findArticles().then(articles => {
        messenger.send(formatter.formatArticles(articles), sender);
    });
};

exports.askexperts = (sender) => {
    console.log('askexperts');
    
};



