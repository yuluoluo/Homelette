var NumGuestsViewController = function(view, model ) {
	view.backButton.click(function(){
		$('#summaryView').hide();
		$('#numGuestsView').hide();
		$('#instructionsView').hide();
		$('#selectDishView').show();
		$('#sidebarView').show();
	});
}