//YOUR FIREBASE LINKS
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
var room_name = localStorage.getItem("roomname");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(message_data);
                        console.log(firebase_message_id);
                        //End code
                        name1 = message_data['name'];
                        like = message_data['like'];
                        messages = message_data['message'];
                        nameHTML = "<h4>" + name1 + "<img src='tick.png' class='user_tick'></h4>";
                        messageHTML = "<h4 class='message_h4'>" + messages + "</h4>"
                        like_buttonHTML = "<button class='btn btn-warning' id='" + firebase_message_id + "' onclick='update_like(this.id)' value=" + like + ">Like:" + like + "</button>"
                        row=nameHTML+messageHTML+like_buttonHTML;
                        document.getElementById("output").innerHTML+=row;
                  }
            });
      });
     
}
getData();
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("storage");
      window.location = "index.html";
}
function send() {
      var message = document.getElementById("message").value;
      if(message!=""){
      var room_username = localStorage.getItem("storage");
      firebase.database().ref(room_name).push({ name: room_username, message: message, like: 0 });
      document.getElementById("message").value = "";
}
}
function update_like(msg_id){
      
      likes=document.getElementById(msg_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(msg_id).update({like:updated_likes});
}

