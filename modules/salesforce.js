"use strict";

let nforce = require('nforce'),

    SF_CLIENT_ID = process.env.SF_CLIENT_ID,
    SF_CLIENT_SECRET = process.env.SF_CLIENT_SECRET,
    SF_USER_NAME = process.env.SF_USER_NAME,
    SF_PASSWORD = process.env.SF_PASSWORD;

let org = nforce.createConnection({
    clientId: SF_CLIENT_ID,
    clientSecret: SF_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/oauth/_callback',
    mode: 'single',
    autoRefresh: true
});

let theLead = nforce.createSObject('Lead');
theLead.set('Company', `Facebook Customer`);
theLead.set('Status', 'New');

let theLeadId = '';

let getLeadId = () =>{
    console.log('inside getLeadId');
    return new Promise((resolve, reject) => {
        //theZip = zip;
        resolve(theLeadId);
    });
};

let login = () => {
    org.authenticate({username: SF_USER_NAME, password: SF_PASSWORD}, err => {
        if (err) {
            console.error("Authentication error");
            console.error(err);
        } else {
            console.log("Authentication successful");
        }
    });
};

let createLead = (customerFName, customerLName, customerId) => {
    if(customerFName){
        return new Promise((resolve,reject) => {
            var l = nforce.createSObject('Lead');
            l.set('Company', `Facebook Customer`);
            l.set('FirstName', `${customerFName}`);
            l.set('LastName', `${customerLName}`);
            l.set('Description', "Facebook id: " + customerId);
            l.set('Status', 'New');
            l.set('Lead_Score__c', 50);

            org.insert({ sobject: l }, function(err, resp){
                if(!err){
                    console.log('It worked!: ', l);
                    theLeadId = l._fields.id;
                    console.log('It worked!: ', theLeadId);
                    resolve(l);
                }
                else{
                    reject("An error occurred while creating a lead");
                }
            });
        });
    }
};

let updateLead = (params, sender) => {
    console.log('how is this getting called');
    if(params){
        return new Promise((resolve, reject) => {

            console.log("params: ", params);

            var q = 'SELECT Id, CreatedDate, Statut_locatif__c, Equipement__c, Assureur_actuel__c FROM Lead ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theLead = resp.records[0];
                    if(params.q2){
                        theLead.set('Statut_locatif__c', params.q2);
                        theLead.set('Lead_Score__c', 60);
                    }
                    if(params.q3){
                        theLead.set('Equipement__c', params.q3);
                        theLead.set('Lead_Score__c', 75);
                    }
                    if(params.q4){
                        theLead.set('Assureur_actuel__c', params.q4);
                        theLead.set('Lead_Score__c', 90);
                    }
                    console.log("theLead: ", theLead);
                    org.update({ sobject: theLead }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theLead);
                        }
                        else{
                            reject("Error updating the Lead");
                        }
                    });
                }
            });
        });
    }
};

let createCase = (customerFName, customerLName, customerId) => {

    return new Promise((resolve, reject) => {
        console.log('inside createCase');
        var c = nforce.createSObject('Case');
        console.log("BURSHT 1");
        c.set('subject', `Contact Pierre Martin (Facebook Customer)`);
        console.log("BURSHT 2");
        c.set('description', "Facebook id: " + customerId);
        console.log("BURSHT 3");
        c.set('origin', 'Facebook Bot');
        console.log("BURSHT 4");
        c.set('status', 'New');

        console.log('c: ' , c);

        org.insert({sobject: c}, function(err, resp){
            if (err) {
                console.error(err);
                console.log('error: ',err);
                reject("An error occurred while creating a case");
            } else {
                console.log('resolve case');
                resolve(c);
            }
        });
    });

};

let updateCase = (params, sender) => {
    console.log('how is this getting called Case');
    if(params){
        return new Promise((resolve, reject) => {

            console.log("params: ", params);

            var q = 'SELECT Id, Incident__c, Injuries__c, Material_Damage__c FROM Case ORDER BY CreatedDate DESC LIMIT 1';

            org.query({ query: q }, function(err, resp){

                if(!err && resp.records) {

                    var theCase = resp.records[0];
                    console.log('theCase', theCase);

                    if(params.r2){
                        theCase.set('Incident__c', params.r2);
                    }
                    if(params.r3){
                        theCase.set('Injuries__c', params.r3);
                    }
                    if(params.r4){
                        theCase.set('Material_Damage__c', params.r4);
                    }
                    console.log("theCase: ", theCase);
                    org.update({ sobject: theCase }, function(err, resp){
                        if(!err){
                            console.log('It worked!');
                            resolve(theCase);
                        }
                        else{
                            reject("Error updating the Lead");
                        }
                    });
                }
            });
        });
    }
};


let findArticles = (params) => {
    let where = "";
    if (params) {

    }
    return new Promise((resolve, reject) => {
        let q = `SELECT 
                    Title, 
                    KnowledgeArticleId, 
                    Summary 
                FROM KnowledgeArticleVersion 
                WHERE Language='en_US' 
                AND PublishStatus='online' 
                AND (KnowledgeArticleId = 'kA40Y000000gKXo' OR KnowledgeArticleId = 'kA40Y000000gKXj' OR KnowledgeArticleId = 'kA40Y000000gKXt')
                LIMIT 4`;
        org.query({query: q}, (err, resp) => {
            if (err) {
                reject("An error as occurred");
            } else {
                resolve(resp.records);
            }
        });
    });
};

let getRecommendation = (params, sender) => {
    console.log('inside getRecommendation');
    let where = "";
    if (params) {
        let parts = [];
        /*
        console.log('params.suggestion.service_plan: ', params.suggestion.service_plan);
        if (params.suggestion.service_plan) parts.push(`recommendId__c = ${params.suggestion.service_plan}`);
        if (parts.length>0) {
            where = "WHERE " + parts.join(' AND ');
        }
        */
    }
    return new Promise((resolve, reject) => {

        console.log("params: ", params);
        console.log("where: ", where);

        let q = `SELECT 
                    Title, 
                    KnowledgeArticleId, 
                    Summary 
                FROM KnowledgeArticleVersion 
                WHERE Language='en_US' 
                AND PublishStatus='online'
                LIMIT 1`;

        console.log('q: ',q);

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                var theRecommend = resp.records[0];
                console.log('theRecommend: ', theRecommend);

                /*
                theRecommend.set('Lead__c', theLeadId);
                //resolve(theRecommend);
                org.update({ sobject: theRecommend }, function(err, resp){
                    if(!err){
                        console.log('It worked!');
                        resolve(theRecommend);
                    }
                    else{
                        reject("Error updating the Lead");
                    }
                });
                */
                resolve(theRecommend);
            }
            else{
                console.log('err: ', err);
                reject("Error");
            }
        });
    });
};

let getReview = (params, sender) => {
    console.log('inside getReview');
    let where = "";
    if (params) {
        
        console.log('params.theId: ', params.theId);
        where = ` AND KnowledgeArticleId = '${params.theId}'`
        /*
        if (params.suggestion.service_plan) parts.push(`recommendId__c = ${params.suggestion.service_plan}`);
        if (parts.length>0) {
            where = "WHERE " + parts.join(' AND ');
        }
        */
    }
    return new Promise((resolve, reject) => {

        console.log("params: ", params);
        console.log("where: ", where);

        let q = `SELECT 
                    Title, 
                    KnowledgeArticleId, 
                    Summary 
                FROM KnowledgeArticleVersion 
                WHERE Language='en_US' 
                AND PublishStatus='online' 
                ${where}
                LIMIT 1`;

        console.log('q: ',q);

        org.query({ query: q }, function(err, resp){

            if(!err && resp.records) {

                console.log('resp.records[0]: ', resp.records[0]);
                resolve(resp.records[0]);
            }
            else{
                console.log('err: ', err);
                reject("Error");
            }
        });
    });
};

let setLeadInfo = (values) => {
    if(values){
        console.log('values: ', values);
        console.log('theLead: ', theLead);
        /*
        return new Promise((resolve,reject) => {
            theLead.set('Company', `Facebook Customer`);
            theLead.set('Status', 'New');

            org.insert({ sobject: l }, function(err, resp){
                if(!err){
                    console.log('It worked!: ', l);
                    theLeadId = l._fields.id;
                    console.log('It worked!: ', theLeadId);
                    resolve(l);
                }
                else{
                    reject("An error occurred while creating a lead");
                }
            });
        });
        */
    }
};

login();

exports.org = org;
exports.findArticles = findArticles;
exports.createLead = createLead;
exports.updateLead = updateLead;
exports.createCase = createCase;
exports.updateCase = updateCase;
exports.getReview = getReview;
exports.getRecommendation = getRecommendation;