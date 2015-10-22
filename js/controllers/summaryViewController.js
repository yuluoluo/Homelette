var SummaryViewController = function(view, model ) {

	view.printRecipeBtn.click(function(){
		$('#summaryView').hide();
		$('#dishDescriptionView').hide();
		$('#instructionsView').show();
	});
}