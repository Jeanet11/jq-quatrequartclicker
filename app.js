$(document).ready(function(){
	var count = 0;

	$(".cake-is-a-lie").click(function() {
		count++;
		$(".counter").html(count);

	var array = [ "tata", "toto", "tutu","titi"];
	var item = parseInt(Math.random() * array.length);
	
	
	if (count%20 === 0) {

		alert(array[item]);
	}	

	});
	

});