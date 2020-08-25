class Fipe {
    // Get the list of available car manufacturers
    async getBrand(){
        const brandResponse = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        const brand = await brandResponse.json();
        return brand;
    }

    // Get the list of available models for the choses brand
    async getModel(brand){
        const modelResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`);
        const models = await modelResponse.json();
        return models;
    }

    async getYears(brand, model){
        const yearResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`);
        const year = await yearResponse.json();
        // console.log(year);
        return year;
    }

    async getPrice(brand, model, year){
        const priceResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`)

        const price = await priceResponse.json();
        return price;
    }
}