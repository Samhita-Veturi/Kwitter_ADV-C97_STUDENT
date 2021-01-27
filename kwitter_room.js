//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDZLhnzK09P-2YOS1AJk-UuqKFKgGwS3F8",
      authDomain: "c-93-kwitter.firebaseapp.com",
      databaseURL: "https://c-93-kwitter-default-rtdb.firebaseio.com",
      projectId: "c-93-kwitter",
      storageBucket: "c-93-kwitter.appspot.com",
      messagingSenderId: "683510318360",
      appId: "1:683510318360:web:e471f2c66372f3725bca6d"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

User_Name = localStorage.getItem("User_1");
document.getElementById("Heading_Name").innerHTML = "Welcome " + User_Name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_Names = childKey;
      //Start code
console.log("Room Names: " + Room_Names);
Row = "<div class='room_name' id=" + Room_Names + " onclick='redirectToRoomName(this.id)'>#" + Room_Names + "</div><hr>";
document.getElementById("Output").innerHTML+= Row;
      //End code
      });});}
getData();

function Add_Room(){
      Room_Name = document.getElementById("Input_Tag").value;
      firebase.database().ref("/").child(Room_Name).update({
            Purpose: "Adding Rooms"
      });
      localStorage.setItem("Room_Name", Room_Name);
}

function redirectToRoomName(Name){
      console.log(Name);
      localStorage.setItem("Room_Name", Name);
      window.location = "kwitter_page.html";
}

function Logout(){
      localStorage.removeItem("Room_Name");
      localStorage.removeItem("User_1");
      window.location = "index.html";
}
