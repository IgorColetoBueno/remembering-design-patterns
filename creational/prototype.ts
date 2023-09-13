interface Prototype<T> {
    clone: () => T
}

class Product implements Prototype<Product> {
    name: string
    brand: string

    clone() {
        const product = new Product()
        product.name = this.name
        product.brand = this.brand

        return product
    }

    toString() {
        return `${product.name} - ${product.brand}`
    }
}

const product = new Product()
product.name = "Total 90"
product.brand = "Nike"

const clonned = product.clone()
console.log(clonned.toString())