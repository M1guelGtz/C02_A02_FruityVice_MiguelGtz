export class Nutritions {
    #calories
    #carbohydrates
    #fat
    #protein
    #sugar
    
    constructor(calories, carbohydrates, fat, protein, sugar){
        this.#calories = calories
        this.#carbohydrates = carbohydrates
        this.#fat = fat
        this.#protein = protein
        this.#sugar = sugar
    }

    getCalories(){ return this.#calories }
    getCarbohydrates(){ return this.#carbohydrates }
    getFat(){ return this.#fat }
    getProtein(){ return this.#protein }
    getSugar(){ return this.#sugar }
}