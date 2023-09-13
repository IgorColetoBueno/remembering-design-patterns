interface Product {
    name: string
    toString: () => string
}

class SoccerBall implements Product {
    name: string
    constructor(name: string) {
        this.name = name
    }
    toString() {
        return `Soccer ball: ${this.name}`
    }
}

class SoccerBoots implements Product {
    name: string
    constructor(name: string) {
        this.name = name
    }
    toString() {
        return `Soccer boots: ${this.name}`
    }
}

abstract class Factory {
    public abstract createProduct(name: string): Product


    toString(product: Product) {
        console.log(`Factory made the ${product.toString()}`)
    }
}

class SoccerBallFactory extends Factory {
    public createProduct(name: string): Product {
        const soccerBall = new SoccerBall(name)
        return soccerBall;
    }
}

class SoccerBootsFactory extends Factory {
    public createProduct(name: string): Product {
        const soccerBall = new SoccerBoots(name)
        return soccerBall;
    }
}

const ballFactory = new SoccerBallFactory()
const ball = ballFactory.createProduct("Adidas Jabulani")
const bootsFactory = new SoccerBootsFactory()
const boots = bootsFactory.createProduct("Nike total 90")

ballFactory.toString(ball)
bootsFactory.toString(boots)