var SidebarViewController = function(view, model ) {
	$("#confirmButton").click(function(){
		$('#sidebarView').hide();
		$('#dishDescriptionView').hide();
		$('#selectDishView').hide();
		$('#numGuestsView').show();
		$('#summaryView').show();
	 });

	 $("#removeStarterBtn").click(function(){
	 	$('#starter').hide();
		model.removeDishFromMenu(view.starter.id);
	 });

	 $("#removeMainBtn").click(function(){
	 	$('#main').hide();
		model.removeDishFromMenu(view.main.id);
	 });
	 
	 $("#removeDessertBtn").click(function(){
	 	$('#dessert').hide();
		model.removeDishFromMenu(view.dessert.id);
	 });

}