interface Handler {
    setNext: (handler: Handler) => Handler
    handle: (request: string) => string
}

abstract class StringCleaner implements Handler {
    private nextHandler: Handler

    setNext(handler: Handler) {
        this.nextHandler = handler
        return handler
    }

    handle(request: string) {
        console.log('called')
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }

        return request
    }
}

class StringTrimStartFormatter extends StringCleaner {
    handle(request: string) {
        request = request.trimStart()

        return super.handle(request);
    }
}

class StringTrimEndFormatter extends StringCleaner {
    handle(request: string) {
        request = request.trimEnd()

        return super.handle(request);
    }
}

const trimLeft = new StringTrimStartFormatter()
const trimRight = new StringTrimEndFormatter()

trimLeft.setNext(trimRight)


const result = trimLeft.handle(" Teste ")

// It's correct if the value is 5 (length without spaces)
console.log(result.length)
