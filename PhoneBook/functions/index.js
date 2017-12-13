'use strict';

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');


//name of the Project(specifically the name you put in actions section of dialogflow)
const NAME_ACTION = 'PhoneBook';
//Name of Entity(the name of the entity, provided by google or custom entities)
const DEPARTMENT_NAME = 'department';
//if there are multiple entities, you just create more variables

//This calls some functions from firebase-functions, but I'm not sure what its doing right now
exports.PhoneBook = functions.https.onRequest((request, response) => {
    //Create an instance:
    const app = new DialogflowApp({request: request, response: response});
    
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    
  // The function that generates the the phone number to the office
    function getPhoneNumber(app){
	//grabs the department name from the google assistant input
	let office = app.getArgument(DEPARTMENT_NAME);
	//outputs the message to the google assistant
	if(office == 'Bursar'){
	    app.tell('The phone number for the ' + office + ' is 518-276-6610.')
	}else if(office == 'Registrar'){
	    app.tell('The phone number for the ' + office + ' is 518-276-6810');
	}else{
	    app.tell('Sorry  I currently cannot help with that. I will try to do better in the future')
	}
  }
  // build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(NAME_ACTION, getPhoneNumber);
   

  app.handleRequest(actionMap);
});
