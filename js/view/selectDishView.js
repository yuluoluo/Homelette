//ExampleView Object constructor
var SelectDishView = function(container, model) {
	
	this.starter = container.find("#starters");
	this.main = container.find("#main");
	this.dessert = container.find("#desserts");
    this.searchButton = container.find("#searchButton");
    this.inputValue = container.find("#searchDish");
    this.CategoryOpt = container.find("#option");

    model.addObserver(this);
	this.update=function(data){

    try{

    if(data.Results[0]!==null){         
        if(data.Results.length<1 || data.Title !== undefined){
            var dishlist="No results, please try a different search input";            
        }
        else{                    
            var dishlist = "";
    	    for ( var i = 0; i < data.Results.length; i++) {
    			var obj = data.Results[i];
    			dishlist += '<div id="dishData" class="imgContainer"><div class="col-md-3" id=' + obj.RecipeID + '>'+ '<img id="' + obj.RecipeID + '" style="margin-top: 5px; margin-bottom: 5px; margin-right:5px; width: 150px; height:150px" src="'+ obj.ImageURL +'" alt ="' + obj.ImageURL +'">'
                 + '<h6>' + obj.Title + '</h6>'+ '</div></div>';
              }
        }
      }
    }

    catch(TypeError){
    }

    this.starter.html(dishlist);



}

}

