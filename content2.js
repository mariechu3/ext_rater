
// 1. Create the button
//var button = document.createElement("button");
//button.innerHTML = "Do Something";

// 2. Append somewhere
//var body = document.getElementsByTagName("body")[0];
//body.insertBefore(button, document.body.firstChild);

// 3. Add event handler
//button.addEventListener ("click", function() {
//  alert("did something");
//});

//var row = document.getElementById("ui-jqgrid-labels ui-sortable");
//var x = row.insertCell(0);
//x.innerHTML = "New cell";

var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}