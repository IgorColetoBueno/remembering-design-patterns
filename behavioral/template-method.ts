abstract class SoccerPlayer {
    constructor(private name: string) {

    }

    run() {
        console.log(`${this.name} is running`)
    }

    pass() {
        console.log(`${this.name} is passing the ball`)
    }

    jump() {
        console.log(`${this.name} is jumping`)
    }
}

class GoalKeeper extends SoccerPlayer {
    constructor(private name: string) {
        super(name)
    }

    defendUsingHands() {
        console.log(`${this.name} is defending with their hands`)
    }
}

class Forward extends SoccerPlayer {
    constructor(private name: string) {
        super(name)
    }

    scoreGoal() {
        console.log(`${this.name} scored a goal`)
    }
}

const goalkeeper = new GoalKeeper('Igor')
const forward = new Forward('Alex')

goalkeeper.defendUsingHands()
forward.scoreGoal()