
class UI{
    brandJson(json){
        let output = '';

        for (let i = 0; i < json.length ; i++){
            let obj = json[i];
            // console.log(obj.nome);
            output += `
            <option value="${obj.codigo}">${obj.nome}</option>
            `
        }
        document.getElementById('brand').innerHTML = output
    }

    modelJson(models){
        let output = '';

       models.modelos.forEach(function(model){
        output += `
            <option value="${model.codigo}">${model.nome}</option>
            `
       });
            
        document.getElementById('model').innerHTML = output  
    }

    yearJson(years){
        let output = '';

        years.forEach(function(year){
            output += `
            <option value="${year.codigo}">${year.nome}</option>
            `
        });

        document.getElementById('year').innerHTML = output
    }


    priceJson(price){
        console.log(price);
        document.getElementById('price').innerHTML = `
        ${price.Valor}
        `
    }
}



