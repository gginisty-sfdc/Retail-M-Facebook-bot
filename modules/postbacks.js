"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');
/*
exports.schedule_visit = (sender) => {
	console.log('schedule_visit');
	messenger.getUserInfo(sender).then(response => {
    	messenger.send(formatter.formatAppointment(response), sender);
    });
};

exports.confirm_visit = (sender, values) => {
	console.log('values: ', values);
    messenger.send({text: `Votre rendez-vous est confirmé pour le ${values[1]}`}, sender);
};

exports.link_postback = (sender, values) => {
	console.log('link_postback');
    messenger.send({text: `Link`}, sender);
};

exports.image_postback = (sender, values) => {
	console.log('image_postback');
	messenger.getUserInfo(sender).then(response => {
    	messenger.send(formatter.imageShow(response), sender);
    });
};
*/

exports.readarticle = (sender, values) => {
    console.log('readarticle values: ', values);
};

exports.joincommunity = (sender, values) => {
    console.log('joincommunity values: ', values);
};

exports.seereviews = (sender, values) => {
    console.log('seereviews values: ', values);
    /*
    salesforce.getReview({theId: values[1]}, sender).then((theReview) => {
        //messenger.send(formatter.formatReview(theReview), sender);
    });
    */
};

exports.getinstore = (sender, values) => {
    console.log('getinstore');
};

