//ExampleView Object constructor
var ExampleView = function (container,model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
    //this.selectedDishes = container.find("#first");
    //this.foodName=container2.find("#name1");
    //this.picture=container2.find("#pic1");
    //this.picture2=container2.find("#pic2");
    //this.foodInfo=container2.find("#foodInfo");
    //this.numberOfGuests.html=5;

    this.numberOfGuests.html(model.getNumberOfGuests());

    $(".btn").on('click', function() {
        var guestCounter=model.getNumberOfGuests();
        var buttonId = $(this).attr('id');
        if(buttonId=="minusGuest") {

            if(guestCounter<2){
            }
            else{
                guestCounter--;
            }
        }
        else if(buttonId=="plusGuest"){
            guestCounter++;
        }
        model.setNumberOfGuests(guestCounter);
        $("#numberOfGuests").html(model.getNumberOfGuests());
        });


	// Search functionality in the sidebar
	var sourceArr = [];

	$("#searchDish").typeahead({
		local: sourceArr
	});


	$("#searchDish").keyup(function() {
		var userInput = $(this).val();
		$("#selectDishView li").map(function(index, value) {
			$(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
		});
	});


    //If-else for incrementing or decrementing guest number using buttons.


}
