interface Strategy {
    notify: (message: string) => void
}

class NotifyToEmailStrategy implements Strategy {
    notify(message: string) {
        console.log(`Message sent to email: ${message}`)
    }
}

class NotifyToWhatsAppStrategy implements Strategy {
    notify(message: string) {
        console.log(`Message sent to WhatsApp: ${message}`)
    }
}

class NotifyToSmsStrategy implements Strategy {
    notify(message: string) {
        console.log(`Message sent to sms: ${message}`)
    }
}

class NotificationManager {
    private strategy: Strategy

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    notify(message: string) {
        this.strategy.notify(message)
    }
}

const manager = new NotificationManager()
manager.setStrategy(new NotifyToEmailStrategy())
manager.notify("Hello!")
manager.setStrategy(new NotifyToWhatsAppStrategy())
manager.notify("Hello!")
manager.setStrategy(new NotifyToSmsStrategy())
manager.notify("Hello!")