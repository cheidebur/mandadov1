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
          $('<li>' + toAdd + '</li>').prependTo(".entries-list").hide().slideDown('fast');
          $("input").val('');

});

      

//using enter key as well as clicking on submit button and resetting
//the input field after enter is pressed and li created



       $("input[name=ListItem]").keypress(function(event){
          if(event.keyCode == 13) {
            $("#button").click();
            $(this).val('');
            return false;
          }         
      });
      

//clear button, placement down here works

      $("#clear").click(function(yas) {
/*fade out ul*/      
          $(".entries-list").fadeOut(function() {
/*empty UL and show again to be able to repopulate*/
          $(this).empty().show();

           });
     });


//double click remove single list item   

      $("ul").on('click','li', function(){
        $(this).slideUp('fast');    
      });
      



      
    });