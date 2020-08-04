// change instructor names to different text

var images = document.querySelectorAll('[aria-describedby="list-id-table_PERSON_FULL_NAME"]');//document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
	images[i].innerHTML = "Hello";
	//print(images[i]);
  //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

//chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//  console.log(tabs[0]);
// });


<<<<<<< HEAD
/*
var row = document.getElementById("ui-jqgrid-labels ui-sortable");
var x = row.insertCell(0);
x.innerHTML = "New cell";
*/
=======
//var list = document.querySelectorAll('[aria-label="search-div-b-table_PERSON_FULL_NAME"]');
>>>>>>> origin/meganEdit
