# VoiceAssistant

## Set up a local environment
1. Fork the repo
2. open Terminal and clone your repo:
   ```git clone https://github.com/[YOUR_USERNAME_HERE]/VoiceAssistant.git```
3. Connect to the original repo
   ```git remote add upstream https://github.com/rchowdhury98/VoiceAssistant.git```
4. Sync your repo with the master repo

   ```git fetch upstream``` to fetch the original repo
   
   ```git checkout master```	to checkout your master branch
   
   ```git merge upstream/master``` to merges the original repo with your master branch.

## Set up a Google Cloud Platform Account
Navigate to [Google Cloud Platform](https://cloud.google.com/) and set up an account.

In the search bar, search for the Voice Assistant Project.
   ID number: ```voice-assistant-181005```
   
#### Only do this step when setting up a new AIY-Voice Assistant Project
   ###### To download the proper authentication JSON navigate to credentials
   ###### Find RCOS OAuth 2.0 client ID and click the down arrow to download the proper Authentication file.
   
## Creating your first application
Navigate to [Actions on Google](https://developers.google.com/actions/)
1. Select the Guides tab and create the Silly-Name Maker application with Dialogflow


