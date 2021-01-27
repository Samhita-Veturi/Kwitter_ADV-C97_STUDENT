//YOUR FIREBASE LINKS
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

    var User_Name = localStorage.getItem("User_1");
    var room_name = localStorage.getItem("Room_Name");

    function UpLike(Message_ID){
          console.log("Clicked on Like Button - " + Message_ID);
          Button_Id = Message_ID;
          Likes = document.getElementById(Button_Id).value;
          Up_Likes = Number(Likes) + 1;
          console.log(Up_Likes);

          firebase.database().ref(room_name).child(Message_ID).update({
                Like: Up_Likes
          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name_1 = message_data['Name'];
Like = message_data['Like'];
Message = message_data['Message'];
Name_Tag = "<h4>"+Name_1+"<img class='user_tick' src='tick.png'></h4>";
Message_Tag = "<h4 class='Message_h4'>"+ Message+"</h4>";
Like_Button = "<button class='btn btn-md btn-outline-warning' id="+firebase_message_id+" value="+Like+" onclick='UpLike(this.id)'>";
Span_Glyph = "<span class='glyphicon glyphicon-thumbs-up'>Likes:"+Like+"</span></button><hr>";
Row = Name_Tag + Message_Tag + Like_Button + Span_Glyph;
document.getElementById("output").innerHTML += Row;
//End code
      } });  }); }
getData();

function Logout(){
      localStorage.removeItem("Room_Name");
      localStorage.removeItem("User_1");
      window.location = "index.html";
}

function Send(){
      Msg = document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            Room:room_name,
            Name:User_Name,
            Message:Msg,
            Like:0
      });
      document.getElementById("Message").value = "";
}