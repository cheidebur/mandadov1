$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('.entries-list').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=ListItem]").keypress(function(event){
          if(event.keyCode == 13) {
            $("#button").click();
            return false;
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('.checked-item').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('.entries-list > li').sortable();  
      
    }
);