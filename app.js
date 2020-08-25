// Init Fipe
const fipe = new Fipe;

// Init UI
const ui = new UI;


// Load the car brands.
fipe.getBrand().then(data=>{
        ui.brandJson(data);
    });

let carBrand = '';
let carModel = '';
let carYear = '';

// Selected  brand and show models related to it.
function selectedBrand(brand){
    const selectedBrand = brand.options[brand.selectedIndex].value;
    console.log("This is the selected brand: " + selectedBrand);

    // Load the car models.
    fipe.getModel(selectedBrand).then(data=>{
        ui.modelJson(data);
    });

    carBrand = selectedBrand;
    
};



// Selected model and show years related to it .
function selectedModel(model){
    const selectedModel = model.options[model.selectedIndex].value;
    console.log("This is the selected model: " + selectedModel);

    carModel = selectedModel;

    getYears();
};


function getYears(){ 
        fipe.getYears(carBrand, carModel).then(data=>{
        ui.yearJson(data);
    });
    
}

function selectedYear(year){
    const selectedYear = year.options[year.selectedIndex].value;
    carYear = selectedYear;

    getPrice();
};

function getPrice(){
    fipe.getPrice(carBrand, carModel, carYear).then(data=>{
        ui.priceJson(data);
    });

}

