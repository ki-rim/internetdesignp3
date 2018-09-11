// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Old SDK (deprecated)
js.src = "https://connect.facebook.net/en_US/all.js";

// New SDK (v2.x)
js.src = "https://connect.facebook.net/en_US/sdk.js";

$window.fbAsyncInit = function() {
    FB.init({ 
      appId: '{your-app-id}',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
};