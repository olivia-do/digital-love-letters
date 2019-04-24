
const http = require('http');
console.log('Client-side code running');

// test profile data
// const profile = require('./profile');
console.log('testing require profile', require('./profile'));
// console.log('profile data', profile);

const button = document.getElementById('btn-assignParticipant');
button.addEventListener('click', function(e, profile) {
  console.log('button was clicked');
  // function assignParticipant() {
    // document.getElementById("profile").innerHTML = profile;
});
