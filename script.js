let stuff;
let red = stuff ;
$(".to-pack-button").click(function(){
	stuff = $(".to-pack-input").val();
    $(".packing-list").append("<li class='abc'>"+"I'm going to pack "+ stuff +"</li>");
    
    $(".packing-list").css("color","blue");
});

//Im going to do this later im tired.

//You’ll need to declare an index variable outside of the click listener and set it to 0 at the start
//Then after you’ve added the the item to the list, add 1 to the index variable
//This allows you to track the number of items you have recorded and figure out if the current item is odd or even and then assign a css class to the current item accordingly
//-kony pham 2021
//<li class=‘“ + index%2 ? ‘abc’: ‘blue’ + “’>I’m going to pack “ + stuff + “</li>