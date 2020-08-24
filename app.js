// Init Fipe
const fipe = new Fipe;

// Init UI
const ui = new UI;




// Getting the data for the car brands
fipe.getBrand().then(data=>{
        ui.brandJson(data);
    });




// Create selectBrand function?
// function getBrand(){
//     selectBrand.addEventListener('click', (e)=>{
//          clearYear(); 
//         const brand = e.target.value; 
//         return brand;
// }


// Getting the data for the models
// Getting the brand code for finding their available car models
const selectBrand = document.getElementById('brand');

selectBrand.addEventListener('click', (e)=>{
    const brand = e.target.value; 
      fipe.getModel(brand).then(data=>{
          ui.modelJson(data);
      });

    // Getting the data for the years
    // Getting the model code for finding the year(s) the model was manufactured
    const selectModel = document.getElementById('model');

    selectModel.addEventListener('click', (e)=>{
    const model = e.target.value;
    fipe.getYears(model, brand).then(data=>{
        ui.yearJson(data);
    });

    });

});




