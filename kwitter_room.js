

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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 row="<div class='room_name' id='"+Room_names+"' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;


 });});}
getData();
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username;
function addroom() {
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",roomname);
window.location="kwitter_page.html";
}
function redirect(name) {
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}