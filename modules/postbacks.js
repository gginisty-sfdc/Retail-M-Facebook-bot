"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.readarticle = (sender, values) => {
    console.log('readarticle values: ', values);
};

exports.joincommunity = (sender, values) => {
    console.log('joincommunity values: ', values);
};

exports.seereviews = (sender, values) => {
    console.log('seereviews values: ', values);
    messenger.send(formatter.showReview(), sender);

};

exports.getinstore = (sender, values) => {
    console.log('getinstore');
    messenger.send(formatter.showMap(), sender);
};

exports.helpful = (sender, values) => {
    console.log('helpful');
};

