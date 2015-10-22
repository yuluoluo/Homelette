var InstructionsView = function (container,model) {

	this.dishes = container.find("#dishes");
	this.starter = container.find("#starters");
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
	this.update=function(data){		
    var dishlist = "";
	for ( var i = 0; i < data.length; i++) {
			var obj = data[i];
            var ingredients = model.getPrintableIngredients(obj);
            
            dishlist += '<div class="col-md-12" style="border-bottom:dashed rgba(232,232,232,1.00)><div class="col-md-2"><img id="starter" style="margin-top: 5px; margin-bottom: 5px; width: 120px;" src="'+ obj.ImageURL +'" alt ="' + obj.ImageURL +'"></div><div class="col-md-4"><h4 id="starterName">'+obj.Title+'</h4> <p id="starterDescription" style="border-right-style: solid;font-size:11px;">'+ingredients+'</p></div><p style="margin-top: 10px;font-size:17px"></p><div id="starterIngredients" class="col-md-6">'+obj.Instructions+'</div></div>';
            // dishlist += '<div class="col-md-12" style="border-bottom:dashed rgba(232,232,232,1.00)><div class="col-md-2"><img id="starter" style="margin-top: 5px; margin-bottom: 5px; width: 120px;" src="'+ obj.ImageURL +'" alt ="' + obj.ImageURL +'"></div><div class="col-md-4"><h4 id="starterName">'+obj.Title+'</h4> <p id="starterDescription" style="border-right-style: solid;font-size:11px;">'+obj.Instructions+'</p></div><p style="margin-top: 10px;font-size:17px">Ingredients</p><div id="starterIngredients" class="col-md-6">'+ingredients+'</div></div>';
            //dishlist += '<div class="col-md-12" style="border-bottom:dashed rgba(232,232,232,1.00)"><div class="col-md-2"><img id="starter" style="margin-top: 5px; margin-bottom: 5px; width: 120px;" src="'+ obj.ImageURL +'" alt ="' + obj.ImageURL +'"></div><div class="col-md-4"><h4 id="starterName">'+obj.Title+'</h4> <p id="starterDescription" style="border-right-style: solid;font-size:11px;">'+obj.Instructions+'</p></div><p style="margin-top: 10px;font-size:17px">Ingredients</p><div id="starterIngredients" class="col-md-6">'+ingredients+'</div></div>';

              /* <div class="col-md-12" style=" border-bottom:dashed rgba(232,232,232,1.00)">
   <div class="col-md-2">
<img id="starter" alt="Icon 001 5" src="images/icecream.jpg"style="margin-top: 5px; margin-bottom: 5px; width: 120px;"></div>
<div class="col-md-4">
<h4 id="starterName"></h4>
<p id="starterDescription" style="font-size:10px">*/
          }

        this.dishes.html(dishlist);
    /*
    	this.starterName.html(dish.name);
			this.starterDescription.html(dish.description);
			this.starterIngredients.html(model.getPrintableIngredients(dish));



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
		} */
	}


}