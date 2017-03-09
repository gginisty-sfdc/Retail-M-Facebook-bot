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
    salesforce.findArticles().then(articles => {
        messenger.send(formatter.formatArticles(articles), sender);
    });
};

exports.trendequip = (sender) => {
    console.log('trendequip');
    salesforce.setLeadInfo({q2 : 'trendequip'}, sender).then(()=> {
        salesforce.createLead(sender).then(()=> {
            messenger.send(formatter.formatRecommendation(), sender);
        });
    });
    /*
    messenger.getSuggestion('1', '1').then(suggestResponse => {
        salesforce.getRecommendation({suggestion: suggestResponse}, sender).then((recommendationResponse) => {
            //messenger.send({text: `Très bien, voici nos offres recommandées`}, sender);
            messenger.send(formatter.formatRecommendation(recommendationResponse), sender);
        });
    });
    */
};

exports.newtech = (sender) => {
    console.log('newtech');
    salesforce.setLeadInfo({q2 : 'newtech'}, sender).then(()=> {
        salesforce.createLead(sender).then(()=> {
            messenger.send(formatter.formatRecommendation(), sender);
        });
    });
};

exports.lowcost = (sender) => {
    console.log('lowcost');
    salesforce.setLeadInfo({q2 : 'lowcost'}, sender).then(()=> {
        salesforce.createLead(sender).then(()=> {
            messenger.send(formatter.formatRecommendation(), sender);
        });
    });
};



