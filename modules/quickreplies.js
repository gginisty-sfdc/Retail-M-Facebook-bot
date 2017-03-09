"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.camprelax = (sender) => {
	console.log('camprelax');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.easyone(response), sender);
        salesforce.setLeadInfo({q1 : 'camprelax'}, sender).then();
    });
    //messenger.send({text: `camprelax`}, sender);
};

exports.climbmountain = (sender) => {
    console.log('climbmountain');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.easyone(response), sender);
        salesforce.setLeadInfo({q1 : 'climbmountain'}, sender).then();
    });
};

exports.perfectclimbing = (sender) => {
    console.log('perfectclimbing');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.easyone(response), sender);
        salesforce.setLeadInfo({q1 : 'perfectclimbing'}, sender).then();
    });
};

exports.browseproducts = (sender) => {
    console.log('browseproducts');
    messenger.getUserInfo(sender).then(response => {
        messenger.send(formatter.askstyle(response), sender);
    });
};

exports.askexperts = (sender) => {
    console.log('askexperts');
    messenger.getUserInfo(sender).then(response => {
        salesforce.findArticles().then(articles => {
            messenger.send({text: `Here are our recommended articles:`}, sender);
            setTimeout(function(){ 
                messenger.send(formatter.formatArticles(articles), sender);
            }, 2000);
            setTimeout(function(){ 
                messenger.send(formatter.easyone2(response), sender);
            }, 3000);
        });
    });
};

exports.trendequip = (sender) => {
    console.log('trendequip');
    salesforce.setLeadInfo({q2 : 'trendequip'}, sender).then(thereturn => {
        salesforce.createLead(sender).then(return2 => {
            console.log('return from createLead');
            messenger.send(formatter.formatRecommendation(return2), sender);
        });
    });
};

exports.newtech = (sender) => {
    console.log('newtech');
    salesforce.setLeadInfo({q2 : 'newtech'}, sender).then(thereturn => {
        salesforce.createLead(sender).then( return2 => {
            console.log('return from createLead');
            messenger.send(formatter.formatRecommendation(return2), sender);
        });
    });
};

exports.lowcost = (sender) => {
    console.log('lowcost');
    salesforce.setLeadInfo({q2 : 'lowcost'}, sender).then(thereturn => {
        salesforce.createLead(sender).then( return2 => {
            console.log('return from createLead');
            messenger.send(formatter.formatRecommendation(return2), sender);
        });
    });
};



