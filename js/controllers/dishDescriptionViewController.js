var DishDescriptionViewController = function(view, model) {


	view.backToSelectDish.click(function(){
		$('#dishDescriptionView').hide();
		$('#selectDishView').show();
	});
    $(view.confirmDishButton).on('click', function(){
        //Clears table so the sideBarView can show the correct dishes in menu!
        $("#myTable td").remove();

	    model.addDishToMenu(view.data);
        model.getFullMenu();
        $('#dishDescriptionView').hide();
        $('#selectDishView').show();       
		
    });
                                     
}
