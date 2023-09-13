interface OS {
    getOSName: () => string
    getOSVersion: () => string
    readCPUInfo: () => string
    readRAMInfo: () => string
}

interface MobileOS extends OS {
    displayNotifications: Function
}

interface DesktopOS extends OS {
    connectToPrinter: Function
}

class Windows implements DesktopOS {
    getOSName() {
        return 'Windows'
    }
    getOSVersion() {
        return '1.0.0'
    }
    readCPUInfo() {
        return 'READY'
    }
    readRAMInfo() {
        return '80%'
    }

    connectToPrinter() {

    }
}

class Linux implements DesktopOS {
    getOSName() {
        return 'Linux'
    }
    getOSVersion() {
        return '2.0.0'
    }
    readCPUInfo() {
        return 'RUNNING'
    }
    readRAMInfo() {
        return '40%'
    }
    connectToPrinter() {

    }
}

class Android implements MobileOS {
    displayNotifications() {
        console.log('Android notification sent')
    }
    getOSName() {
        return 'Linux'
    }
    getOSVersion() {
        return '2.0.0'
    }
    readCPUInfo() {
        return 'RUNNING'
    }
    readRAMInfo() {
        return '40%'
    }
}


interface Application {
    os: OS
    toString: () => string
    writeFile: Function
}

class MobileApplication implements Application {
    os: MobileOS

    constructor(os: MobileOS) {
        this.os = os
    }

    toString() {
        return `${this.os.getOSName()} - ${this.os.getOSVersion()}`
    }

    writeFile() {
        console.log(`File wrote on ${this.os.getOSName()}`)
    }
}

class DesktopApplication implements Application {
    os: DesktopOS

    constructor(os: DesktopOS) {
        this.os = os
    }

    toString() {
        return `${this.os.getOSName()} - ${this.os.getOSVersion()}`
    }

    writeFile() {
        console.log(`File wrote on ${this.os.getOSName()}`)
    }
}


const android = new Android()
const windows = new Windows()
const linux = new Linux()

const application = new MobileApplication(android)
const application2 = new DesktopApplication(windows)

console.log(application.toString())
console.log(application2.toString())

application.writeFile()
application2.writeFile()