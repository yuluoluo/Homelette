var NumGuestsView = function (container,model) {
    
    this.numberOfGuests = container.find("#numberOfGuests");
    this.backButton = container.find("#backButton");
   
    //this.numberOfGuests.html("My dinner: "+ model.getNumberOfGuests()+" people");


    model.addObserver(this);
    
    this.update = function(data){
        this.numberOfGuests.html("My dinner for "+ model.getNumberOfGuests()+" people");
        
    }

}