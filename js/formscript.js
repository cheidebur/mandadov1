$(document).ready(

/*clear button function fail, why does placement at top
not function?

 $("#clear").click(function() {
      $(".entries-list").empty();
      return false;
      });
*/

  
//adding input text value and submit buttom

    function(){
        $('#button').click(function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('.entries-list').append('<li>' + toAdd + '</li>');

            });
//using enter key as well as clicking on submit button

       $("input[name=ListItem]").keypress(function(event){
          if(event.keyCode == 13) {
            $("#button").click();
            return false;
          }         
      });

//clear button, placement down here works

      $("#clear").click(function(yas) {
      $(".entries-list").empty();
      return false;
      });


//double click remove single list item   

      $("ul").on('dblclick','li', function(){
        $(this).slideUp('slow');    
      });
      
      
      
    });