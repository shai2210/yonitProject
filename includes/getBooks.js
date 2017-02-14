
/**
 * @author shai
 */
$(document).ready(function(){
	$.getJSON("includes/books.json",function(data){ 
	    for (var i = 0;i <"includes/books".length; i++){
			$(".data").append( '<img src=" '+data.book[i].url+'">');
		}
	});
});