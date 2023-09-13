interface HouseBuilder {
    buildFoundation: Function
    buildWalls: Function
    buildDoors: Function
    buildRoof: Function
    buildWindows: Function
    buildGarage: Function
    buildPool: Function
}

class AmericanBuilder implements HouseBuilder {
    buildFoundation() {
        console.log("american foundation done");
    }
    buildWalls() {
        console.log("american walls done");
    }
    buildRoof() {
        console.log("american roof done");
    }
    buildWindows() {
        console.log("american windows done");
    }
    buildGarage() {
        console.log("american garage done");
    }
    buildPool() {
        console.log("american pool done");
    }
    buildDoors() {
        console.log("american doors done");
    }
}

class BrazilianBuilder implements HouseBuilder {
    buildFoundation() {
        console.log("brazilian foundation done");
    }
    buildWalls() {
        console.log("brazilian walls done");
    }
    buildRoof() {
        console.log("brazilian roof done");
    }
    buildWindows() {
        console.log("brazilian windows done");
    }
    buildGarage() {
        console.log("brazilian garage done");
    }
    buildPool() {
        console.log("brazilian pool done");
    }
    buildDoors() {
        console.log("brazilian doors done");
    }
}

interface Director {
    buildHouseSimple: Function
    buildHouseWithPool: Function
    buildHouseWithGarage: Function
    buildHouseWithGarageAndPool: Function
}

class DirectorImpl implements Director {
    private builder: HouseBuilder

    setBuilder(builder: HouseBuilder) {
        this.builder = builder
    }

    buildHouseSimple() {
        this.builder.buildDoors()
        this.builder.buildFoundation()
        this.builder.buildRoof()
        this.builder.buildWalls()
        this.builder.buildWindows()
    }
    buildHouseWithPool() {
        this.builder.buildDoors()
        this.builder.buildFoundation()
        this.builder.buildRoof()
        this.builder.buildWalls()
        this.builder.buildWindows()
        this.builder.buildPool()
    }
    buildHouseWithGarage() {
        this.builder.buildDoors()
        this.builder.buildFoundation()
        this.builder.buildRoof()
        this.builder.buildWalls()
        this.builder.buildWindows()
        this.builder.buildGarage()
    }
    buildHouseWithGarageAndPool() {
        this.builder.buildDoors()
        this.builder.buildFoundation()
        this.builder.buildRoof()
        this.builder.buildWalls()
        this.builder.buildWindows()
        this.builder.buildPool()
        this.builder.buildGarage()
    }

}

const director = new DirectorImpl()
director.setBuilder(new AmericanBuilder())
director.buildHouseWithGarageAndPool()
director.setBuilder(new BrazilianBuilder())
director.buildHouseWithGarage()