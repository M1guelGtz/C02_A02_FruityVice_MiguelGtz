export class ListFruits{
    #fruits = []

    addFruit(fruit) { this.#fruits.push(fruit) }
    getFruits(){ return this.#fruits }
}