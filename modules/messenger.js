"use strict";

let request = require('request'),
    FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
let util = require('util')
let theZip = '';

exports.send = (message, recipient) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: FB_PAGE_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipient},
            message: message
        }
    }, (error, response) => {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        } else{
            console.log('Send: ', response.body);
        }
    });
};

exports.setZip = (zip) =>{
    console.log('inside setZip');
    theZip = zip;
    return;
};

exports.getZip = () =>{
    console.log('inside getZip');
    return new Promise((resolve, reject) => {
        //theZip = zip;
        resolve(theZip);
    });
};

exports.getUserInfo = (userId) => {

    return new Promise((resolve, reject) => {

        request({
            url: `https://graph.facebook.com/v2.6/${userId}`,
            qs: {fields:"first_name,last_name,profile_pic", access_token: FB_PAGE_TOKEN},
            method: 'GET',
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('getUserInfo: ', response.body);
                resolve(JSON.parse(response.body));
            }
        });

    });
};

exports.getSuggestion = (arg1,arg2) => {

    console.log('arg1: ', arg1);
    console.log('arg2: ', arg2);

    return new Promise((resolve, reject) => {

        request({
            url: `https://pio-octave-engine.herokuapp.com/queries.json`,
            method: 'POST',
            json : { 
                voice_usage: arg1,
                data_usage: arg2,
                text_usage: 0
            }
        }, (error, response) => {
            if (error) {
                console.log('Error sending message: ', error);
                reject(error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            } else {
                console.log('No Error: ', response.body);
                var theResponse = JSON.stringify(response.body);
                console.log('theResponse: ', theResponse);
                resolve(JSON.parse(theResponse));
            }
        });

    });
};