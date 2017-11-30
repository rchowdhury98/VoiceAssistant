'use strict';

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');


//name of the Project
const NAME_ACTION = 'PhoneBook';
//Name of Entity
const DEPARTMENT_NAME = 'department';

   
exports.PhoneBook = functions.https.onRequest((request, response) => {
    //Create an instance:
    const app = new DialogflowApp({request: request, response: response});
    
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    
  // The function that generates the the phone number to the office
  function getPhoneNumber(app){
      let office = app.getArgument(DEPARTMENT_NAME);
      app.tell('The phone number for the ' + office + ' is.');
      
  }
  // build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(NAME_ACTION, getPhoneNumber);
   

  app.handleRequest(actionMap);
});
