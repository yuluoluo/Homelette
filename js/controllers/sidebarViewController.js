var SidebarViewController = function(view, model ) {
	$("#confirmButton").click(function(){
		$('#sidebarView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').hide();
		$('#numGuestsView').show();
		$('#summaryView').show();
	 });

    $("#removeStarterBtn").on('click', function() {
    	$('#starterMENU').hide();
		model.removeDishFromMenu('starter');

	 });

	 $("#removeMainBtn").click(function(){
	 	$('#mainMENU').hide();
		model.removeDishFromMenu('main dish');
	 });

	 $("#removeDessertBtn").click(function(){
	 	$('#dessertMENU').hide();
		model.removeDishFromMenu('dessert');
	 });

}