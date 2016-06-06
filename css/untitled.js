$('form').submit(function() {
		var input_value = $('input').val();
    $('ul').append('<li>' + input_value + '<a href="">x</a> </li>');
    
    $('input').val('');
    return false;

})