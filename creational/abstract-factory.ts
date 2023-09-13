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

interface Factory {
    createProduct(name: string): Product
    toString(product: Product): void
}

class SoccerBallFactory implements Factory {
    public createProduct(name: string): Product {
        const soccerBall = new SoccerBall(name)
        return soccerBall;
    }
    toString(product: Product) {
        console.log(`Factory made the ${product.toString()}`)
    }
}

class SoccerBootsFactory implements Factory {
    public createProduct(name: string): Product {
        const soccerBall = new SoccerBoots(name)
        return soccerBall;
    }
    toString(product: Product) {
        console.log(`Factory made the ${product.toString()}`)
    }
}

const ballFactory = new SoccerBallFactory()
const ball = ballFactory.createProduct("Adidas Jabulani")
const bootsFactory = new SoccerBootsFactory()
const boots = bootsFactory.createProduct("Nike total 90")

const printFactory = (factory: Factory, product: Product) => {
    factory.toString(product)
}

bootsFactory.toString(boots)
printFactory(ballFactory, ball)