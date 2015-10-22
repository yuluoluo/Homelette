//ExampleView Object constructor
var SummaryView = function (container,model) {
	this.starters = container.find("#starters");
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterCost = container.find("#starterCost");
	this.mainCost = container.find("#mainCost");
	this.dessertCost = container.find("#dessertCost");

	this.totalCost = container.find("#totalCost");
	this.printRecipeBtn = container.find("#printRecipeBtn");

	//model.addDishToMenu(1);
    model.addObserver(this);
	this.update=function(data){
	    //this.totalCost.html(model.getTotalMenuCost()*model.getNumberOfGuests());
	    this.totalCost.html(model.getTotalMenuCost());
        var dishlist = "";
	    for ( var i = 0; i < data.length; i++) {
			var obj = data[i];

            dishlist += '<div id="dishData" class="imgContainer"><div style="margin-top: 5px; margin-bottom: 5px; margin-right: 5px; margin-left: 50px" class="col-md-3" id=' + obj.RecipeID + '>'+ '<img id="' + obj.RecipeID + '" style="margin-top: 5px; margin-bottom: 5px; width: 150px; height:150px" src="'+ obj.ImageURL +'" alt ="' + obj.ImageURL +
			'">' + '<h6>' + obj.Title + '</h6>'+ '</div></div>';
          }
        this.starters.html(dishlist);

      /*
    for(var i = 0; i < model.getFullMenu().length; i++) {
			var dish = model.getFullMenu()[i];

			if(dish.type == 'starter') {
				


				this.starterName.html(dish.name);
				this.starterCost.html(model.getDishCost(dish.id) + ' SEK');
			}
			else if(dish.type == 'main dish') {
				
				
				this.main.attr('src', 'images/' + dish.image);
				this.mainName.html(dish.name);
				this.mainCost.html(model.getDishCost(dish.id) + ' SEK');
			}
			else if(dish.type == 'dessert') {
				this.dessert.attr('src', 'images/' + dish.image);
				this.dessertName.html(dish.name);
				this.dessertCost.html(model.getDishCost(dish.id) + ' SEK');
			} 
		}
		this.totalCost.html(model.getTotalMenuPrice());
        */



	}}

	