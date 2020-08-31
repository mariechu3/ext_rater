// change instructor names to different text

var names = document.querySelectorAll('[aria-describedby="list-id-table_PERSON_FULL_NAME"]');//document.getElementsByTagName('img');
var links = [];
var texts = [];
var site = [];
var nums = document.querySelectorAll('[aria-describedby="list-id-table_colsubj"]');
var num = [];
l=names.length;
/*var a = document.createElement('a');
var text = document.createTextNode("Tester");
a.appendChild(text);
a.title = "Go to CAPE";
a.href = "http://cape.ucsd.edu/"
a.target="_blank";
document.body.prepend(a);*/
for (var i = 0; i < l; i++) {
	    console.log(i,nums[i].innerHTML);
	    //console.log(names[i]);
	    if(names[i].innerHTML.indexOf("<span") !== -1) {
			links[i] = document.createElement('a');
			texts[i] = document.createTextNode(" CAPE");
			links[i].appendChild(texts[i]);
			links[i].title = "Click to go to CAPE."

			site[i] = names[i].innerHTML.slice (names[i].innerHTML.indexOf(">")+1, names[i].innerHTML.indexOf("</"));
			site[i] = site[i].replace(/\s/g, '+');
			site[i] = site[i].replace(/,/, '%2C');
			num[i] = nums[i].innerHTML;
			num[i] = num[i].replace(/\s+/g, '+');

			links[i].href = "http://cape.ucsd.edu/responses/Results.aspx?Name="+site[i]+"&CourseNumber="+num[i];
			links[i].target = "_blank";
			names[i].append(links[i]);
		}
		if(names[i].innerHTML.indexOf("Staff") !== -1){
			links[i] = document.createElement('a');
			texts[i] = document.createTextNode(" N/A");
			links[i].appendChild(texts[i]);
			links[i].title = "Sorry, information for 'Staff' doesn't exist."
			links[i].target = "_blank";
			names[i].append(links[i]);
		}


	//print(images[i]);
  //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

//chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//  console.log(tabs[0]);
// });
//var list = document.querySelectorAll('[aria-label="search-div-b-table_PERSON_FULL_NAME"]');

