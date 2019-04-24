
import participantProfiles from './profile-data';
// let participantData = require('./profile-data');
console.log('participantProfiles', participantProfiles);

export class Participants {

  sendParticipant(e, data) {
    for(var i = 0; i < participantProfiles.length; i++) {
        console.log('in sendParticipant() loop');
        console.log('length', participantProfiles.length);
      var profile = participantProfiles;
        profile.firstname = participantProfiles[i].firstname;
        profile.lastname = participantProfiles[i].lastname;
        profile.age = participantProfiles[i].age;
        console.log('i', i);
        console.log('profile from participant data', profile[i])(function (err) {
          console.log('profile data error');
        });
      }
      return profile;
      console.log('profile data load complete', profile);
    }

}
