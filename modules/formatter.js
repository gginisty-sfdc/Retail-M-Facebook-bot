"use strict";

let moment = require("moment"),
    numeral = require("numeral");


exports.challenge = response => {
    return {
        "text":"NTO is a community of experts to help you achieve your goals. What challenge would you like to take on in the next few months?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Mini",
            "payload":"camprelax"
          },
          {
            "content_type":"text",
            "title":"Renault",
            "payload":"climbmountain"
          },
          {
            "content_type":"text",
            "title":"BMW",
            "payload":"perfectclimbing"
          }
        ]
    }
};

exports.easyone = response => {
    return {
        "text":"Great taste :) How can I help",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Browse Tires",
            "payload":"browseproducts"
          },
          {
            "content_type":"text",
            "title":"Ask The Experts",
            "payload":"askexperts"
          }
        ]
    }
};

exports.easyone2 = response => {
    return {
        "text":"What else can I do for you?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Browse Tires",
            "payload":"browseproducts"
          },
          {
            "content_type":"text",
            "title":"Show Me More Advice",
            "payload":"askexperts"
          }
        ]
    }
};

exports.formatArticles = articles => {
    let elements = [];
    articles.forEach(article => {
            elements.push({
                title: article.get("Title"),
                subtitle: article.get("Summary"),
                "image_url": 'https://github.com/gginisty-sfdc/demo-img/blob/master/Image-1.jpg?raw=true',
                "buttons": [
                    
                    {
                        "type":"web_url",
                        "url":"https://sdodemo-main-141e22218e0-144-15950af6391.force.com/nto/s/article/" + article.get("KnowledgeArticleId"),
                        "title":"Read"
                    },
                    {
                        "type":"web_url",
                        "url":"https://retailnto.my.salesforce.com/knowledge/publishing/articleOnlineDetail.apexp?id=" + article.get("KnowledgeArticleId"),
                        "title":"Join the Community"
                    }
                ]
            })
        }
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.askstyle = response => {
    return {
        "text":"How often do you drive in winter conditions?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Never",
            "payload":"trendequip"
          },
          {
            "content_type":"text",
            "title":"Occasionally",
            "payload":"newtech"
          },
          {
            "content_type":"text",
            "title":"Often",
            "payload":"lowcost"
          }
        ]
    }
};

exports.formatRecommendation = rec => {

    let elements = [];
        elements.push(  
            
            {
                title: 'MICHELIN Primacy 3',
                subtitle: `The perfect combination of safety and longetivity`,
                "image_url": 'https://github.com/gginisty-sfdc/demo-img/blob/master/Image%201.jpg?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "See Reviews",
                        "payload": "seereviews"
                    },
                    {
                        "type": "postback",
                        "title": "Find a dealer",
                        "payload": "getinstore"
                    },
                    {
                        "type":"web_url",
                        "url":"http://www.michelin.co.uk/tyres/michelin-primacy-3",
                        "title":"Purchase"
                    }
                ]
            },
            
            {
                title: 'MICHELIN Energy Saver+',
                subtitle: `The safe, long-lasting & fuel efficient tyre`,
                "image_url": 'https://github.com/gginisty-sfdc/demo-img/blob/master/Image%202.jpg?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "See Reviews",
                        "payload": "seereviews"
                    },
                    {
                        "type": "postback",
                        "title": "Find a dealer",
                        "payload": "getinstore"
                    },
                    {
                        "type":"web_url",
                        "url":"http://www.petit-bateau.fr/e-shop/product/22170/O00/lot-de-2-dors-bien-bebe-mixte.html",
                        "title":"Purchase"
                    }
                ]
            },
            {
                title: 'Veste bébé fille en tubique matelassé',
                subtitle: ``,
                "image_url": 'https://github.com/gginisty-sfdc/demo-img/blob/master/Image%203.jpg?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "See Reviews",
                        "payload": "seereviews"
                    },
                    {
                        "type": "postback",
                        "title": "Get In Store",
                        "payload": "getinstore"
                    },
                    {
                        "type":"web_url",
                        "url":"http://www.petit-bateau.fr/e-shop/product/22052/O84/veste-bebe-fille-en-tubique-matelasse.html",
                        "title":"Purchase"
                    }
                ]
            }
        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.showReview = response => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Depuis la Naissance de ma fille (qui a aujourd'hui 2 mois et demi), j'ai essayé plusieurs marques de Body / Pyjama. 
La Meilleure marque niveau qualité, reste tout de même Petit Bateau. Apres un certain nombre de lavages, les bodys restent comme neufs ! `,
                "buttons": [
                    {
                        "type":"web_url",
                        "url":"https://sdodemo-main-141e22218e0-144-15950af6391.force.com/nto/s/article/",
                        "title":"See More"
                    },
                    {
                        "type": "postback",
                        "title": "This was helpful",
                        "payload": "helpful"
                    }
                ]
            }
        }
    };
};

exports.showMap = response => {
    var lat = "48.856359";
    var long = "2.293439";
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": {
                    "element": {
                        "title": "Store Location",
                        "image_url": "https:\/\/maps.googleapis.com\/maps\/api\/staticmap?size=764x400&center="+lat+","+long+"&zoom=25&markers="+lat+","+long,
                        "item_url": "http:\/\/maps.apple.com\/maps?q="+lat+","+long+"&z=16"
                    }
                }
            }
        }
    };
};

 
