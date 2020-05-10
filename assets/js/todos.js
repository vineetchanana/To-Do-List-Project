

//using on instead of click to add event listeners to future elements on the page in both functions
$("ul").on("click","li",function(){
	$(this).toggleClass("completed"); 
});

//When clicking on X..fades out and delete
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove(); 
	});
	event.stopPropagation();           //will stop the bubbling
});


//taking the input and adding to li
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span> " + todoText + "</li>");
	}


});

// fades the input text on clicking on pencil
$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle();
})



	