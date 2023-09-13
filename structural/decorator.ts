interface MathComponent {
    value: number
}
interface MathDecorator {
    component: MathComponent
    operand: number
}
 
class BasicMathComponent implements MathComponent {
    constructor(public value: number) {
    }
}
 
class AddDecorator implements MathComponent {
    public value:number

    constructor(component: MathComponent, operand: number) {
        this.value = component.value + operand
     }
}
 
class SubtractDecorator implements MathComponent {
    public value:number

    constructor(component: MathComponent, operand: number) {
        this.value = component.value + operand
     }
}

// Example usage
const mathComponent = new BasicMathComponent(10); 

const addResult = new AddDecorator(mathComponent, 5);
const addResult2 = new AddDecorator(addResult, 5);
console.log("After add:", addResult2.value);
