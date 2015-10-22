var InstructionsView = function (container,model) {


	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterIngredients = container.find("#starterIngredients");
	this.mainIngredients = container.find("#mainIngredients");
	this.dessertIngredients = container.find("#dessertIngredients");

	this.starterDescription = container.find("#starterDescription");
	this.mainDescription = container.find("#mainDescription");
	this.dessertDescription = container.find("#dessertDescription");

	model.addObserver(this);
	this.update=function(arg){

	for(var i = 0; i < model.getFullMenu().length; i++) {
			var dish = model.getFullMenu()[i];
			if(dish.type == 'starter') {
				this.starter.attr('src', 'images/' + dish.image);
				this.starterName.html(dish.name);
				this.starterDescription.html(dish.description);
				this.starterIngredients.html(model.getPrintableIngredients(dish));
			}
			if(dish.type == 'main dish') {
				this.main.attr('src', 'images/' + dish.image);
				this.mainName.html(dish.name);
				this.mainDescription.html(dish.description);
				this.mainIngredients.html(model.getPrintableIngredients(dish));
			}
			if(dish.type == 'dessert') {
				this.dessert.attr('src', 'images/' + dish.image);
				this.dessertName.html(dish.name);
				this.dessertDescription.html(dish.description);
				this.dessertIngredients.html(model.getPrintableIngredients(dish));
			}
		}
	}
	this.update();

}