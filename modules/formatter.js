"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.onBoard1 = response => {
    return {
        "text":"Bonjour " + response.first_name + " et bienvenue chez Cumulus Assurance. Que puis-je faire pour vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Decouvrir les offres",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"Je suis client",
            "payload":"theStartTwo"
          }
        ]
    }
};

exports.onBoard2 = response => {
    console.log('onBoard2');
    return {
        "text":"Etes vous locataire ou proprietaire?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Locataire",
            "payload":"p1"
          },
          {
            "content_type":"text",
            "title":"Colocataire",
            "payload":"p2"
          },
          {
            "content_type":"text",
            "title":"Proprietaire",
            "payload":"p3"
          }
        ]
    }
};

exports.onBoard3 = response => {
    return {
        "text":"Votre logement est-il équipé des dispositifs suivants:",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Alarme incendie",
            "payload":"button6"
          },
          {
            "content_type":"text",
            "title":"Objets connectés",
            "payload":"button7"
          },
          {
            "content_type":"text",
            "title":"Alarme effraction",
            "payload":"button8"
          }
        ]
    }
};

exports.onBoard4 = response => {
    return {
        "text":"Et pour finir : quel est l'assureur actuel de votre logement?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Pas d'assureur",
            "payload":"button9"
          },
          {
            "content_type":"text",
            "title":"AXA",
            "payload":"button10"
          },
          {
            "content_type":"text",
            "title":"MAIF",
            "payload":"button11"
          },
          {
            "content_type":"text",
            "title":"CNP Assurances",
            "payload":"button12"
          },
          {
            "content_type":"text",
            "title":"Autre",
            "payload":"button13"
          }

        ]
    }
};

exports.onBoard5 = response => {

    let elements = [];
        elements.push(  
            {
                title: 'Cumulus Confort',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JWHdVeWM2dVc5Q2o0dzZVMUJVVGE5NGg3MF84',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
                    }
                ]
            },
            {
                title: 'Cumulus Confort Plus',
                subtitle: `20,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JLWRiUjBPejFHREh3dnFZMjNRbzh2U2hyOE9V',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
                    }
                ]
            },
            {
                title: 'Offre maison connectée',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JOEpjd0wxRTllZUpaNnJWWnpfNTQ2S2gxbHc0',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Détails",
                        "payload": "button14"
                    },
                    {
                        "type": "postback",
                        "title": "Souscrire",
                        "payload": "button15"
                    },
                    {
                        "type": "postback",
                        "title": "Mon conseiller",
                        "payload": "button16"
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

exports.onBoard6 = response => {
    return {
        "text":"Que pouvons-nous faire pour vous?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Déclarer un sinistre",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"Découvrir les services Cumulus",
            "payload":"theStartTwo"
          }
        ]
    }
};

exports.onBoard7 = response => {
    return {
        "text":"Quel type d'incident aimeriez-vous constater?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Dégât des eaux",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"Vol",
            "payload":"theStartTwo"
          },
          {
            "content_type":"text",
            "title":"Incendie",
            "payload":"theStartTwo2"
          }
        ]
    }
};

exports.onBoard8 = response => {
    return {
        "text":"Y-a-t-il des blessés dans le dégât?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Qui",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"Non",
            "payload":"theStartTwo"
          }
        ]
    }
};

exports.onBoard9 = response => {
    return {
        "text":"A combien estimez-vous les dommages matériels suite à l'incident?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"moins de 1 000€",
            "payload":"theStart"
          },
          {
            "content_type":"text",
            "title":"entre 1 000 et 10 000 €",
            "payload":"theStartTwo"
          },
          {
            "content_type":"text",
            "title":"Plus de 10 000 €",
            "payload":"theStartTwo"
          }
        ]
    }
};

exports.onBoard10 = response => {
    let elements = [];
        elements.push(  
            {
                title: 'Cumulus Confort',
                subtitle: `17,99€ par mois`,
                "image_url": 'https://drive.google.com/uc?export=view&id=0BxwASYlURQ-JWHdVeWM2dVc5Q2o0dzZVMUJVVGE5NGg3MF84',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Contactez-moi",
                        "payload": "button"
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

 