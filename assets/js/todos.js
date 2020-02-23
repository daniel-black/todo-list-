// check off specific todos by clicking
// .click() will only add listeners for existing elements
// .on() will add listeners for all potential future elements
// for that reason, we will use .on()

// added click listener to entire ul parent
// "when an li is clicked inside of a ul, run this code"
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});


// click on x to delete todo 
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){     // targets the parent element, li
		$(this).remove();	// removes list element entirely
	}); 
	event.stopPropagation();  // this function stops the event from bubbling up to parent layers 
});

// add listener to enter key hit in textbox input
$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		// grab new text from input after enter key is pressed
		var todoText = $(this).val();
		// create new li and add to ul
		$('ul').append(`<li><span>X </span>${todoText}</li>`);
		$(this).val('');	// clears text box
	}
})