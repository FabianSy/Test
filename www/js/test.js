// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    navigator.splashscreen.show();
    setTimeout(navigator.splashscreen.hide(), 1000);
}

function helloWorld(){
  ${"#helloWorld"}.html("You made it!");
}

