interface Listener {
    callback: (text: string) => void
}

interface EventManager {
    addListener: (listener: Listener) => void
    removeListener: (listener: Listener) => void
    triggerEvent: () => void
}

class UIEventManager implements EventManager {
    constructor(private listeners: Listener[]) {

    }

    addListener(listener: Listener) {
        this.listeners.push(listener)
    }
    removeListener(listener: Listener) {
        const index = this.listeners.indexOf(listener)

        if (index > -1) {
            this.listeners.splice(index, 1)
        }
    }

    triggerEvent() {
        this.listeners.forEach((listener, index) => listener.callback(`Listener ${index} triggered`))
    }
}

class ButtonListener implements Listener {
    callback(text: string) {
        console.log(`Button: ${text}`)
    }
}

class LinkListener implements Listener {
    callback(text: string) {
        console.log(`Link: ${text}`)
    }
}

const button = new ButtonListener()
const link = new LinkListener()

const manager = new UIEventManager([button, link])

manager.triggerEvent()
manager.triggerEvent()
