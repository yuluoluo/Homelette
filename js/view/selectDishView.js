//ExampleView Object constructor
var SelectDishView = function(container, model) {

		/*** This code is loading the dishes ***
	 *** but shows only one at a time	*** */
	// 	this.images = container.find("#images");
	this.starter = container.find("#starters");
	this.main = container.find("#main");
	this.dessert = container.find("#desserts");

	var dishlist = "";
	for (var i = 0; i < model.getAllDishes("starter").length; i++) {
		dishlist += '<div id=list><div class="col-md-3" id=' + model.getAllDishes("starter")[i].id + '>'+ '<img id="pic1" style="margin-top: 5px; margin-bottom: 5px; margin-right:5px; width: 150px; height:150px" src="' + 'images/' + model.getAllDishes("starter")[i].image + '" alt ="' + model.getAllDishes("starter")[i].image +
			'">' + '<h6>' + model.getAllDishes("starter")[i].name + '</h6>'+ '</div></div>';
	}
	this.starter.html(dishlist);

	dishlist = "";

	for (var i = 0; i < model.getAllDishes("main dish").length; i++) {
		dishlist += '<div id=list><div class="col-md-3"  id=' + model.getAllDishes("main dish")[i].id + '>'+ '<img style="margin-top: 5px; margin-bottom: 5px; width: 150px; height:150px" src="' + 'images/' + model.getAllDishes("main dish")[i].image + '" alt ="' + model.getAllDishes("main dish")[i].image +
			'">' + '<h6>' + model.getAllDishes("main dish")[i].name + '</h6>'+ '</div></div>';
	}
	this.main.html(dishlist);

	dishlist = "";


	for (var x = 0; x < model.getAllDishes("dessert").length; x++) {
		dishlist += '<div id=list><div class="col-md-3" id=' + model.getAllDishes("dessert")[x].id + '>'+'<img style="margin-top: 15px; margin-bottom: 5px; width: 150px; width:150px" src="' + 'images/' + model.getAllDishes("dessert")[x].image + '" alt ="' + model.getAllDishes("dessert")[x].image +
			'">' + '<h6>' + model.getAllDishes("dessert")[x].name + '</h6>'+'</div></div>';
		
	}


	this.dessert.html(dishlist);
    //this.test.html(dishlist[25]+dishlist[26]+dishlist[27]);
    
// Search functionality in the sidebar
/*	var sourceArr = [];

	$("#searchDish").typeahead({
		local: sourceArr
	});


	$("#searchDish").keyup(function() {
		var userInput = $(this).val();
		$("#selectDishView div").map(function(index, value) {
			$(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
		});
	});*/
} 
