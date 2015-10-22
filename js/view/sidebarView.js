var SidebarView = function (container,model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalCost=container.find("#totalCost");
    this.removeStarter=container.find("#removeStarterBtn");
    this.menu=container.find("menu");
    //this.foodItems=container.find("#starterMENU");

    this.starterDishName=container.find("#starterItem");
    this.starterDishCost=container.find("#starterItemCost");

    this.mainDishName=container.find("#mainItem");
    this.mainDishCost=container.find("#mainItemCost");

    this.dessertDishName=container.find("#dessertItem");
    this.dessertDishCost=container.find("#dessertItemCost");

    this.myTable=container.find("#myTable");
    //
    //this.removeButton=container.find("#removeButton");


	model.addObserver(this);
	this.update=function(data){
	    var guestNumber = model.getNumberOfGuests();
	    this.numberOfGuests.html(guestNumber);
        this.totalCost.html(model.getTotalMenuCost());
	    try{
	        //$("#myTable td").remove();
	        for(x in data){
	            //console.log(data[0].Title);
	            if(data[0].Title!==undefined){
	                $('#myTable tr:last').after('<tr id="'+data[x].RecipeID+'"><td class="ttl" id="dessertItem">'+data[x].Title+'</td><td id="dessertItemCost" width="30">'+model.getDishCost(data[x])+'</td><td width="40"><button id="removeButton" class="btn btn-xs btn-danger">x</button></td></tr>');

	            }
	            //console.log(data[0]);
	        }

	    }
        catch(TypeError){
            //alert("nehe");
            }
        }}
	    //this.totalCost.html(model.getTotalMenuCost());
        
            //try{
            //alert(data.length);
        //var numberOfDishes=data.length;
            //var value=model.getDishCost(data);
            /*
            if(value > 0){
            alert(value);
            for (x in data) {
                          
                    $('#myTable tr:last').after('<tr id="'+data[x].RecipeID+'"><td class="ttl" id="dessertItem">'+data[x].Title+'</td><td id="dessertItemCost" width="30">'+model.getDishCost(data[x])+'</td><td width="40"><button id="removeButton" class="btn btn-xs btn-danger">x</button></td></tr>');
                    }
            */
                    //dishlist += '<div id="dishData" <h6>hej</h6>'+ '</div></div>';
                    //menuList += '<tr id="mainMENU"><td class="ttl" id="mainItem">'+data[x].Title+'</td><td id="mainItemCost" width="30"></td><td width="40"><button id="removeMainBtn" class="btn btn-xs btn-danger">x</button></td></tr>'
                  

                    //menuList += '<tr id="menubla"><td class="ttl" id="mainItem"></td><td id="mainItemCost" width="30"></td><td width="40"><button id="removeMainBtn" class="btn btn-xs btn-danger">x</button></td></tr>';
                    
                    
                //table.html(menuList);
                    


            /*
                    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
                    var newRow   = tableRef.insertRow(tableRef.rows.length);
                    var newCell  = newRow.insertCell(0);
                    var newText  = document.createTextNode(data[x].Title)
                    newCell.appendChild(newText);
                    //this.mainDishName.html(data[x].Title);
            */
                    //menuList += '<tr id="mainMENU"><td class="ttl" id="mainItem"></td><td id="mainItemCost" width="30"></td><td width="40"><button id="removeMainBtn" class="btn btn-xs btn-danger">x</button></td></tr>'
                    //this.sideMenu.html(menuList);

                    //alert(obj.Title);
                    //$('#mainMENU').show();
                    
                    //this.menu.html(menuList);
                    //this.mainDishName.html(data[x].Title);
                    //this.mainDishCost.html(model.getDishCost(data[x]));


            
            //catch(TypeError){
                //alert("wtf");
                    //this.mainDishName.html("Pending");


/*
	    this.numberOfGuests.html(model.getNumberOfGuests());
        $('#starterMENU').show();
        this.starterDishName.html(data.Title);
		//this.totalCost.html(model.getTotalMenuPrice());
*/

            //console.log();
        

           //console.log(data.Title);
           //$('#starterMENU').show();
        /*
            $('#starterMENU').show();
        for (x in fullMenu){
            this.starterDishName.html(fullMenu[x].Title);

           this.starterDishName.html(data.Title);
           var totalCost=0;
           for(x in data.Ingredients){
               totalCost += 1*data.Ingredients[x].Quantity*model.getNumberOfGuests();
           }
           this.starterDishCost.html(totalCost);
        */
        /*
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
        } */






     


