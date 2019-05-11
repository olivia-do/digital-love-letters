import firebase from 'firebase'
import 'firebase/firestore'

class DB {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBmYdYqfVyQfjHksDlfInNDLLZC0nFOjOo",
      authDomain: "digital-love-letters.firebaseapp.com",
      databaseURL: "https://digital-love-letters.firebaseio.com",
      projectId: "digital-love-letters",
      storageBucket: "digital-love-letters.appspot.com",
      messagingSenderId: "795656089920",
      appId: "1:795656089920:web:f77eae73266d0e4b"
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    this.db = firebase.firestore()
  }

  add(data) {
    return this.db.collection('flowers').add(data)
  }
}

export default new DB()
