/* global $ */
 
$(document).ready(function() {
    
   
    $("#clicker").click(function(){
         
         var result= $("#songInput").val();
   
    var urlvar = "https://api.soundcloud.com/tracks?q=" + result + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";    
        console.log(result);
$.ajax({
    url:urlvar,
    method:"GET",
    success:function(response){
        console.log(urlvar);
        console.log(response[0].id);
        console.log(response[0].duration);
        console.log(response[0].uri);
        console.log(response[0]["artwork_url"]);
    }
});
});
}); 
