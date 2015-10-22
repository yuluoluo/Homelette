var DishDescriptionViewController = function(view, model) {

	view.backToSelectDish.click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
	});
    $(view.confirmDishButton).on('click', function(){

	    model.addDishToMenu(model.getLastClickedDishId());
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
    });
                                     
}
