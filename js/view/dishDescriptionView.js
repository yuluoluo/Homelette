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
    
	model.addObserver(this);
	this.update=function(data){
	    //If there is a single element in data then do this	    
        if(data.Title !== undefined){ 
        
	    this.data=data;
		this.dishName.html(data.Title);
        this.dishImg.attr('src', data.ImageURL);
		this.dishDescription.html(data.Description);
 		this.numberOfGuests.html("Ingredients for "+ model.getNumberOfGuests()+" people");
        this.ingredientList.html(model.getPrintableIngredients(data));

      }
      
    }



		
}