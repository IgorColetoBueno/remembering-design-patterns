interface VendingMachineState {
    insertCoin(): void;
    selectItem(item: string): void;
    dispenseItem(): void;
}

class VendingMachine implements VendingMachineState {
    private state: VendingMachineState = new NoCoinState(this)

    changeState(state: VendingMachineState) {
        this.state = state
    }

    insertCoin(): void {
        this.state.insertCoin()
    }
    selectItem(item: string): void {
        this.state.selectItem(item)
    }
    dispenseItem(): void {
        this.state.dispenseItem()
    }

}

class NoCoinState implements VendingMachineState {

    constructor(private vendingMachine: VendingMachine) { }

    insertCoin(): void {
        console.log('coin inserted')
        this.vendingMachine.changeState(new HasCoinState(this.vendingMachine))
    }
    selectItem(item: string): void {
        throw new Error("To select you must insert a coin");
    }
    dispenseItem(): void {
        throw new Error("To dispense something you must insert a coin");
    }
}

class HasCoinState implements VendingMachineState {

    constructor(private vendingMachine: VendingMachine) { }

    insertCoin(): void {
        throw new Error('Coin already inserted!')
    }
    selectItem(item: string): void {
        console.log(`${item} selected!`)
        this.vendingMachine.changeState(new SelectedItemState(this.vendingMachine))
    }
    dispenseItem(): void {
        throw new Error("Method not implemented.");
    }
}

class SelectedItemState implements VendingMachineState {

    constructor(private vendingMachine: VendingMachine) { }

    insertCoin(): void {
        throw new Error('Coin already inserted!')
    }
    selectItem(item: string): void {
        throw new Error("The item is already selected!");
    }
    dispenseItem(): void {
        console.log('Item dispensed!')
        this.vendingMachine.changeState(new NoCoinState(this.vendingMachine))
    }
}

try {
    const machine = new VendingMachine()
    machine.insertCoin()
    machine.selectItem('Coca Cola')
    machine.dispenseItem()
} catch (error) {
    console.error(error.message)
}
