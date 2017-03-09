"use strict";

let moment = require("moment"),
    numeral = require("numeral");


exports.challenge = response => {
    return {
        "text":"NTO is a community of experts to help you achieve your goals. What challenge would you like to take on in the next few months?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Camp and Relax",
            "payload":"camprelax"
          },
          {
            "content_type":"text",
            "title":"Climb a Mountain",
            "payload":"climbmountain"
          },
          {
            "content_type":"text",
            "title":"Perfect My Rock Climbing",
            "payload":"perfectclimbing"
          }
        ]
    }
};

exports.easyone = response => {
    return {
        "text":"Easy one :) How can I help?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Browse Products",
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
            "title":"Browse Products",
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
                subtitle: `SAMPLE`,
                "image_url": 'http://az616578.vo.msecnd.net/files/2016/01/25/635892900467041421-1425876384_writing.jpg',
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
        "text":"What is your style?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Trending Equipment",
            "payload":"trendequip"
          },
          {
            "content_type":"text",
            "title":"New Tech",
            "payload":"newtech"
          },
          {
            "content_type":"text",
            "title":"Low Cost",
            "payload":"lowcost"
          }
        ]
    }
};

exports.formatRecommendation = rec => {

    let elements = [];
        elements.push(  
            
            {
                title: 'Sample 1',
                subtitle: `Recommendation`,
                "image_url": 'http://az616578.vo.msecnd.net/files/2016/01/25/635892900467041421-1425876384_writing.jpg',
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
                        "url":"https://sdodemo-main-141e22218e0-144-15950af6391.force.com/nto/s/article/",
                        "title":"Purchase"
                    }
                ]
            },
            
            {
                title: 'Sample 2',
                subtitle: `Recommendation`,
                "image_url": 'http://az616578.vo.msecnd.net/files/2016/01/25/635892900467041421-1425876384_writing.jpg',
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
                        "url":"https://sdodemo-main-141e22218e0-144-15950af6391.force.com/nto/s/article/",
                        "title":"Purchase"
                    }
                ]
            },
            {
                title: 'Sample 3',
                subtitle: `Recommendation`,
                "image_url": 'http://az616578.vo.msecnd.net/files/2016/01/25/635892900467041421-1425876384_writing.jpg',
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
                        "url":"https://sdodemo-main-141e22218e0-144-15950af6391.force.com/nto/s/article/",
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
                "text": `text from the #1 review from community - author`,
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
                        "title": "Your current location",
                        "image_url": "https:\/\/maps.googleapis.com\/maps\/api\/staticmap?size=764x400&center="+lat+","+long+"&zoom=25&markers="+lat+","+long,
                        "item_url": "http:\/\/maps.apple.com\/maps?q="+lat+","+long+"&z=16"
                    }
                }
            }
        }
    };
};

 