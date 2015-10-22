var SummaryViewController = function(view, model ) {

	view.printRecipeBtn.click(function(){
		model.getFullMenu();
		$('#summaryView').hide();
		$('#dishDescriptionView').hide();
		$('#instructionsView').show();
	});
}