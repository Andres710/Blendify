/*global ServiceConfiguration, process*/
import { Meteor } from 'meteor/meteor';
import Spotify from './Spotify';

Meteor.startup(() => {
  // code to run on server at startup  

  //Configure spotify service
  ServiceConfiguration.configurations.update(
    { 'service': 'spotify' },
    {
      $set: {
        'clientId': '0a945853df304e4698a8e4b91e1f41da',
        'secret': process.env.BLENDIFY_SECRET
      }
    },
    { upsert: true }
  );
});
