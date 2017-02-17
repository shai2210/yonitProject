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
});