var SelectDishViewController = function(view, model ) {


	$(view.searchButton).on('click', function() {
		
		//$('#loading').show();		
		var value = $(view.inputValue).val();
        //console.log(value);
		model.getRecipeJsonSearch(value);

        return false;
	});
/*
	$( document ).on("change", view.CategoryOpt, function(){
		
	    var value = $(view.CategoryOpt).val();     
        
        model.getRecipeJsonType(value);
        
	});
*/
    $(view.starter).on("click","img",function(){    	
        model.getRecipeJsonSearch(this.id);
        $('#selectDishView').hide();
		$('#dishDescriptionView').show();

        return false;
    });
    }
