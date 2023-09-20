interface Memento {
    getScoreA: () => number
    getScoreB: () => number
}

class ConcreteMemento implements Memento {
    constructor(private scoreA: number,
        private scoreB: number) { }

    getScoreA() {
        return this.scoreA
    }

    getScoreB() {
        return this.scoreB
    }
}

class Score {
    constructor(private scoreA = 0,
        private scoreB = 0) { }

    addScoreA() {
        this.scoreA++
    }

    addScoreB() {
        this.scoreB++
    }

    save() {
        return new ConcreteMemento(this.scoreA, this.scoreB)
    }

    restore(memento: Memento) {
        this.scoreA = memento.getScoreA()
        this.scoreB = memento.getScoreB()
    }
}

class Game {
    private scoreHistory: Memento[] = []

    constructor(private score: Score) {

    }

    saveScoreState() {
        this.scoreHistory.push(this.score.save())
    }

    invalidateGoal() {
        if (!this.scoreHistory.length) return

        const lastScore = this.scoreHistory.pop()
        this.score.restore(lastScore!)
    }

    showScoreHistory(){
        this.scoreHistory.forEach(item => console.log(`${item.getScoreA()} + ${item.getScoreB()}`))
    }
}

const gameScore = new Score(0,0)
const game = new Game(gameScore)

gameScore.addScoreA()
game.saveScoreState()

gameScore.addScoreB()
game.saveScoreState()

gameScore.addScoreB()
game.saveScoreState()

game.invalidateGoal()

game.showScoreHistory()

