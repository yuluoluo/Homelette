var HomeView = function (container,model) {

$("#createDinner").on('click', function(){
    //model.getRecipeJsonType();
	$('#homeView').hide();
	$('#sidebarView').show();
	$('#selectDishView').show();
	});


/*
$(document).ajaxStart(function() {


    $("#starters").hide();
    $("#loader").show();
    $("#loadingImage").show();

        });

$(document).ajaxStop(function() {

            $("#loader").hide();
            $("#loadingImage").hide();
            $("#starters").show();
        //$("#st-tree-container").show();
});
*/
}
