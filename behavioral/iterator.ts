interface GenericIterator<T> {
    hasNext: () => boolean
    getNext: () => T | null
}

class ArrayIterator<T> implements GenericIterator<T>{
    private currentPosition = -1

    constructor(private list: Array<T>) {

    }

    hasNext() {
        const nextPosition = this.list[this.currentPosition + 1]

        return nextPosition !== undefined
    }

    getNext() {
        if (!this.hasNext()) {
            return null
        }

        this.currentPosition++
        return this.list[this.currentPosition]
    }

}

const list = ['Igor', 'Vitor', 'João']
const iterator = new ArrayIterator(list)
console.log(iterator.getNext())
console.log(iterator.getNext())
console.log(iterator.getNext())
console.log(iterator.getNext())