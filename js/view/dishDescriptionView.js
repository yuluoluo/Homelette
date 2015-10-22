var DishDescriptionView = function(container, model) {
    // Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confirmDishButton");

	this.dishName = container.find("#dishName");
	this.dishImg = container.find("#dishImg");
	this.dishDescription = container.find("#dishDescription");
    this.ingredientList = container.find("#ingredientlist");
    this.numberOfGuests = container.find("#numberOfGuests");
    //this.totalCost = container.find("#totalCost");

   
	model.addObserver(this);
	this.update=function(){

		this.dish = model.getDish(model.getLastClickedDishId());
		this.dishName.html(this.dish.name);
		this.dishImg.attr('src', 'images/' + this.dish.image);
		this.dishDescription.html(this.dish.description);
 		this.numberOfGuests.html("Ingredients for "+ model.getNumberOfGuests()+" people");

	var ingredientlist = "";
			for (var x = 0; x < this.dish.ingredients.length; x++) {
				ingredientlist +=  '<tr><td>'
				+ this.dish.ingredients[x].name + '</td><td >'
				+ this.dish.ingredients[x].quantity*model.getNumberOfGuests()
				+ this.dish.ingredients[x].unit + '</td><td >' 
				+ 'SEK ' + this.dish.ingredients[x].price*model.getNumberOfGuests() + '</td></tr>';

			}


			this.ingredientList.html(ingredientlist);


	}
	this.update();

		
}