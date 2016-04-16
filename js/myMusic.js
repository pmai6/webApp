function myMusic() {
    var search = document.getElementById("mySearch").value;
    var xhr = new XMLHttpRequest();
   // var str = "Scroll down to see result"
    xhr.open('GET', "https://api.soundcloud.com/tracks/259296925?client_id=e365b20c7680b46cfafcaaa45ea5afb4&types=original&p=prince" + search + "<div></div>", true);
	xhr.addEventListener("load", function() {
		document.getElementById("results").innerHTML = xhr.response;
		//console.log(str);
	}, true);

	xhr.send();
   
}



//e365b20c7680b46cfafcaaa45ea5afb4
