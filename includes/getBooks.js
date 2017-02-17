/**
 * @author shai
 */

$(document).ready(function(){
   $("#getBooks").click(function(){
   	 $.ajax({
      url: 'includes/books.json',
      dataType: 'json',
      success: function(data) {
         for (var i = 0;i < data['book'].length; i++){
            $(".data").append( '<img src=" '+data['book'][i].url+'">');
         }
      },
      error: function (request, status, error) {
         console.log('error', error);
      }
   });
});


 $("#getClass").click(function(){
	var dataString1 = "id=1&func=P";

	$.ajax({
		type: 'POST',
		url: 'new.php',
		data: dataString1,
		
		success: function(data){
			
            $(".data").empty();
            $(".data").append(data);
		}
		});
	});
});
