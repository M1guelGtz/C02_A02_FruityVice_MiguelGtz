import { Fruits } from "../models/Fruits.js";
import { Nutritions } from "../models/Nutritions.js";
import { listFruits } from "./dependences.js";

let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://www.fruityvice.com/api/fruit/all"
    fetch(url)
    .then( response => response.json()) 
    .then ( data => {
        console.log(data)
        data.forEach(element => {
            let fruit = new Fruits()
            fruit.setFamily(element.family)
            fruit.setGenus(element.genus)
            fruit.setId(element.id)
            fruit.setName(element.name)
            fruit.setOrder(element.order)
            let nutritions = new Nutritions(element.nutritions.calories, 
                element.nutritions.carbohydrates, element.nutritions.fat, 
                element.nutritions.protein, element.nutritions.sugar)
            fruit.setNutritions(nutritions)
            listFruits.addFruit(fruit)
        });
    }) 
})
const btnView = document.getElementById("btn-view")
btnView.addEventListener("click", ()=>{
    const divFhat = document.getElementById("div-fruits")
    listFruits.getFruits().forEach( item =>{
        let fruit = document.createElement("div")
        fruit.setAttribute("id", "cards")
        divFhat.appendChild(fruit)
        let fruitId = document.createElement("span")
        fruitId.setAttribute("class", "id")
        fruitId.innerText = item.getId()
        fruit.appendChild(fruitId)
        let fruitName = document.createElement("h2")
        fruitName.innerText = item.getName()
        fruit.appendChild(fruitName)

        let family = document.createElement("span")
        family.innerText = "family:"
        fruit.appendChild (family)
        
        let fruitFamily = document.createElement("span")
        fruitFamily.innerText = item.getFamily()
        fruit.appendChild(fruitFamily)
        let genus = document.createElement("span")
        genus.innerText = "genus: "
        fruit.appendChild (genus)
        let fruitGenus = document.createElement("span")
        fruitGenus.innerText = item.getGenus()
        fruit.appendChild(fruitGenus)
        let order= document.createElement("span")
        order.innerText = "Order: "
        fruit.appendChild (order)
        let fruitOrder = document.createElement("span")
        fruitOrder.innerText = item.getOrder()
        fruit.appendChild(fruitOrder)
                
        let calories = document.createElement("span")
        calories.innerText = "Calories: "
        fruit.appendChild (calories)
        
        let fruitNutritionsCalories = document.createElement("span")
        fruitNutritionsCalories.innerText = item.getNutritions().getCalories()
        fruit.appendChild(fruitNutritionsCalories)
        let carbohydrates = document.createElement("span")
        carbohydrates.innerText = "Carbohydrates: "
        fruit.appendChild (carbohydrates)
        let fruitNutritCarbohy = document.createElement("span")
        fruitNutritCarbohy.innerText = item.getNutritions().getCarbohydrates()
        fruit.appendChild(fruitNutritCarbohy)
        let fat = document.createElement("span")
        fat.innerText = "Fat: "
        fruit.appendChild (fat)
        let fruitNutritFat = document.createElement("span")
        fruitNutritFat.innerText = item.getNutritions().getFat()
        fruit.appendChild(fruitNutritFat)
        let protein = document.createElement("span")
        protein.innerText = "Protein: "
        fruit.appendChild (protein)
        let fruitNutrutProtein = document.createElement("span")
        fruitNutrutProtein.innerText = item.getNutritions().getProtein()
        fruit.appendChild(fruitNutrutProtein)
        let sugar = document.createElement("span")
        sugar.innerText = "Sugar: "
        fruit.appendChild (sugar)
        let FruitNutritSugar = document.createElement("span")
        FruitNutritSugar.innerText = item.getNutritions().getSugar();
        fruit.appendChild(FruitNutritSugar)
    })
}) 