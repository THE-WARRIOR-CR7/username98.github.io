var firebaseConfig = {
      apiKey: "AIzaSyAj3lwkdSWYjMkH1V82kADz-EgJQWxVP3o",
      authDomain: "notebook-project-916a6.firebaseapp.com",
      databaseURL: "https://notebook-project-916a6-default-rtdb.firebaseio.com",
      projectId: "notebook-project-916a6",
      storageBucket: "notebook-project-916a6.appspot.com",
      messagingSenderId: "144298200368",
      appId: "1:144298200368:web:f428059d83a5fe17004cf5",
      measurementId: "G-P0ZC3KVYRJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
like=message_data['like'];
message=message_data['message'];
name1=message_data['name1'];
namewithtag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
             span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
             row=namewithtag+messagewithtag+like_button+span_with_tag;
             document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();
function updateLike(messageid) {
like=document.getElementById(messageid).value;
updateLike=Number(like)+1;
firebase.database().ref(room_name).child(messageid).update({
      like:updateLike
});
}
function send() {
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name1:username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}