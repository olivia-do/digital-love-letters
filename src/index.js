
import _ from 'lodash';
import { Participants } from './modules/profile';

//on button click - send match participant from profile data
const participantData = new Participants();

document.addEventListener('DOMContentLoaded', () => {
  const matchButton = document.getElementById('btn-match');
  console.log('matchButton detected', matchButton);
  // matchButton.addEventListener('click', participantData.sendParticipant);
  matchButton.addEventListener('click', () => {
    const profileSection = document.getElementById('profile');
    profileSection.innerHTML = participantData.sendParticipant();
  });
});

// after assignment, have ability to take picture of flower
// example: https://www.html5rocks.com/en/tutorials/getusermedia/intro/

// after taking picture, button to send love note
// sending love note should be stored in 
