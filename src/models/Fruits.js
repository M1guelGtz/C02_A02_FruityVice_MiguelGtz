export class Fruits {
    constructor(){}
    #family
    #genus
    #id 
    #name
    #order
    #nutritions
    
    setFamily(family) { this.#family = family }
    getFamily(){ return this.#family }

    setGenus(genus) { this.#genus = genus }
    getGenus(){ return this.#genus }

    setId(id) { this.#id = id }
    getId(){ return this.#id }

    setName(name) { this.#name = name }
    getName(){ return this.#name }

    setOrder(order) { this.#order = order }
    getOrder(){ return this.#order }

    setNutritions(nutritions) { this.#nutritions = nutritions }
    getNutritions(){ return this.#nutritions }
}