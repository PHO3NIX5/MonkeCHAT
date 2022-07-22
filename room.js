
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDlQghTwJK1w1hi7IZBCd3qvgEo4brFAMI",
      authDomain: "cursed-twitter.firebaseapp.com",
      databaseURL: "https://cursed-twitter-default-rtdb.firebaseio.com",
      projectId: "cursed-twitter",
      storageBucket: "cursed-twitter.appspot.com",
      messagingSenderId: "290851393679",
      appId: "1:290851393679:web:b058ee151dcfacd95e60fa"
};
firebase.initializeApp(firebaseConfig);
getData();
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("rooms-"+Room_names);
                  divHtml="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=divHtml;



                  //End code
            });
      });
}

var username = localStorage.getItem("storage");
document.getElementById("welcome").innerHTML = "Welcome " + username + " !";
function addroom() {
      roomName = document.getElementById("makeroom").value;
      firebase.database().ref("/").child(roomName).update({ purpose: "addingroom" });
      localStorage.setItem("roomname", roomName);
      window.location="kwitter_page.html";
}
function redirectToRoom(room){
      localStorage.setItem("roomname", room);
      console.log(room);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("storage");
      window.location="kwitter_page.html";
}

