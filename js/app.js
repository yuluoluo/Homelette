$(function() {

	//window.stage = "starter";
	//window.stage = "main";
	//window.stage = "dessert";

	var model = new DinnerModel();
	//model.addDishToMenu(1);
	//model.addDishToMenu(100);
	//model.addDishToMenu(201);

    var sidebarView = new SidebarView($("#sidebarView"),model);
	var sidebarViewController = new SidebarViewController(sidebarView,model);

	var selectDishView = new SelectDishView($("#selectDishView"),model);
	var selectDishViewController = new SelectDishViewController(selectDishView,model);

	var dishDescriptionView = new DishDescriptionView($("#dishDescriptionView"),model);
	var dishDescriptionViewController = new DishDescriptionViewController(dishDescriptionView,model);

	var summaryView = new SummaryView($("#summaryView"),model);
	var summaryViewController = new SummaryViewController(summaryView,model);

	var numGuestsView = new NumGuestsView($("#numGuestsView"),model);
	var numGuestsViewController = new NumGuestsViewController(numGuestsView,model);
	/*var exampleView = new ExampleView($("#exampleView"),model);*/


	

	var instructionsView = new InstructionsView($("#instructionsView"),model);

	



});