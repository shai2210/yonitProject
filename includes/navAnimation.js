/**
 * @author shai
 */

$(document).ready(function(){
    $("li").hover(function(){
    	$(this).css("color","white");
        $(this).css("background-color", "#006C52");

        }, function(){
        $(this).css("background-color", "white");
    });
    
    $("li>a").hover(function(){
    	$(this).css("color","white");
        

        }, function(){
        $(this).css("color","black");
    });
});