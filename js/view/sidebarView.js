var SidebarView = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalCost=container.find("#totalCost");
    this.removeStarter=container.find("#removeStarterBtn");

    this.starterDishName=container.find("#starterItem");
    this.starterDishCost=container.find("#starterItemCost");

    this.mainDishName=container.find("#mainItem");
    this.mainDishCost=container.find("#mainItemCost");

    this.dessertDishName=container.find("#dessertItem");
    this.dessertDishCost=container.find("#dessertItemCost");
   

	model.addObserver(this);
	this.update=function(arg){

	    this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalCost.html(model.getTotalMenuPrice());


        var fullMenu = model.getFullMenu();
        for(x in fullMenu){
            var dish = fullMenu[x];
            if (dish.type=='starter'){
                $('#starterMENU').show();
            this.starterDishName.html(dish.name);
            this.starterDishCost.html(model.getDishCost(dish.id));
            }

            else if (dish.type=='main dish'){
                $('#mainMENU').show();
            this.mainDishName.html(dish.name);
            this.mainDishCost.html(model.getDishCost(dish.id));
            }

            else if (dish.type=='dessert'){
                $('#dessertMENU').show();
            this.dessertDishName.html(dish.name);
            this.dessertDishCost.html(model.getDishCost(dish.id));
            }
            else{
                 $('#starterMENU').hide();
                 $('#mainMENU').hide();
                 $('#dessertMENU').hide();
            }
        }


      }

	 $(".btn").on('click', function() {
        var guestCounter=model.getNumberOfGuests();
        var buttonId = $(this).attr('id');
        if(buttonId=="minusGuest") {

            if(guestCounter<2){
            }
            else{
                guestCounter--;
            }
        }
        else if(buttonId=="plusGuest"){
            guestCounter++;
        }
        model.setNumberOfGuests(guestCounter);
        //$("#numberOfGuests").html(model.getNumberOfGuests());
        });

     this.update();

     //var sourceArr = [];

   /* $("#searchDish").typeahead({
        local: sourceArr
    });


    $("#searchDish").keyup(function() {
        var userInput = $(this).val();
        $("#selectDishView li").map(function(index, value) {
            $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
        });
    });
*/

	}