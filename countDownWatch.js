
var tommorow = new Date( "sept 29,2023  10:00:00").getTime();

var x = setInterval(function(){



var now = new Date().getTime();
var diff = tommorow - now;
var days = Math.floor(diff/(1000*60*60*24));

var hours = Math.floor((diff% (1000*60*60*24))/(1000*60*60));

var minutes = Math.floor((diff% (1000*60*60))/(1000*60));

var seconds = Math.floor((diff% (1000*60)) /1000);

document.getElementById("demo").innerHTML = days + "d, " + hours +
"hrs: " + minutes + "m: " + seconds + "s"

},1000);


