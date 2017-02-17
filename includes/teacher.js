/**
 * @author shai
 */
$( document ).ready(function() {
      var path;
        
        var dataString = "id=1&func=A";
        	console.log("table"+ "<tr>"+"<th>"+"fff"+"</th>"+""+"<th>"+"fff"+"</th>"+"</tr>");
             $(".content").append("<table>"+ "<tr>"+"<th>"+"כיתה"+"</th>"+""+"<th>"+"שם התלמיד"+"</th>"+"</tr>"+"</table>"); 
        $.ajax({
            type: 'POST',
            url: 'new.php',
            data: dataString,
            dataType: "json",
            success: function(data){
            
             $(".name").append(n);
            }
        });
   
   
   $(".kid1").append("<img src=images/me.gif alt=parent/>");
});