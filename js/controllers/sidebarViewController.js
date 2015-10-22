var SidebarViewController = function(view, model ) {

	$("#confirmButton").on('click', function(){
		$('#sidebarView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').hide();
		$('#numGuestsView').show();
		$('#summaryView').show();
	 });

    $(document).on('click', '#removeButton', function(){

     model.removeDishFromMenu($(this).closest('tr').attr('id'));
     //Clear the table so correct dishes will be displayed.
     $("#myTable td").remove();
     model.getFullMenu();

 });
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
        var guestNumber=model.getNumberOfGuests();
        view.numberOfGuests.html(guestNumber);
        view.totalCost.html(model.getTotalMenuCost()*guestNumber);
        //var table = document.getElementById("myTable");

        //clear table and update new price per dish * number of guests!
        $("#myTable td").remove();
        model.getFullMenu();

        });

}