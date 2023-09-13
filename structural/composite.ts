abstract class Military {
    protected boss?: Military
    militaryRank: string
    name: string
    subordinates: Military[] = []

    constructor(name: string, rank: string) {
        this.name = name
        this.militaryRank = rank
    }

    setBoss(military: Military) {
        this.boss = military
    }

    getBoss() {
        return this.boss
    }

    add(military: Military) {
        this.subordinates.push(military)
    }
    remove(military: Military) {
        const index = this.subordinates.indexOf(military)
        this.subordinates.splice(index, 1)
    }
    printHierarchy(military: Military){
        console.log('/----------------------------/----------------------------/----------------------------')
        console.log(`${military.militaryRank} - ${military.name}`)
        console.log('Subordinates:')
        military.subordinates.forEach(subordinate => console.log(`${subordinate.militaryRank} - ${subordinate.name}`))
        military.subordinates.forEach(subordinate => this.printHierarchy(subordinate))
    }
}

class MilitaryWithSubordinates extends Military {
}

class MilitaryWithoutSubordinates extends Military {
    add(_: Military) {
        throw new Error("Method not allowed.")
    }
    remove(_: Military) {
        throw new Error("Method not allowed.")
    }
}

class Composite {
    militaries: Military[] = []

    add(military: Military) {
        this.militaries.push(military)
    }
    remove(military: Military) {
        const index = this.militaries.indexOf(military)
        this.militaries.splice(index, 1)
    }

    printHierarchy(){
        this.militaries.forEach(military => military.printHierarchy(military))
    }
}

// Sergeants
const jeff = new MilitaryWithSubordinates('Jeff', 'Sergeant')
// Corporals
const john = new MilitaryWithSubordinates('John', 'Corporal')
const terry = new MilitaryWithSubordinates('Terry', 'Corporal')
// Privates
const jack = new MilitaryWithSubordinates('Jack', 'Private')
const benjamin = new MilitaryWithSubordinates('Benjamin', 'Private')
const oliver = new MilitaryWithSubordinates('Oliver', 'Private')
const alexander = new MilitaryWithSubordinates('Alexander', 'Private')

jeff.add(john)
jeff.add(terry)

john.add(jack)
john.add(benjamin)
terry.add(oliver)
terry.add(alexander)

const composite = new Composite()
composite.add(jeff)

composite.printHierarchy()