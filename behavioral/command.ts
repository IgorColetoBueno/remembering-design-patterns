abstract class Command {
    protected backup: string

    constructor(protected app: Application, protected editor: Editor) {

    }

    saveBackup() {
        this.backup = this.editor.text
    }

    undo() {
        this.editor.text = this.backup
    }

    abstract execute();
}

class CopyCommand extends Command {
    execute() {
        this.saveBackup()
        this.app.clipboard = this.editor.getSelection()
        this.editor.deleteSelection()
        this.app.history.add(this)
    }
}

class PasteCommand extends Command {
    execute() {
        this.saveBackup()
        this.editor.replaceSelection(this.app.clipboard)
        this.app.history.add(this)
    }
}

class UndoCommand extends Command {
    execute() {
        this.app.undo()
        this.app.history.add(this)
    }
}

class CommandHistory {
    constructor(private history: Command[]) {

    }

    add(command: Command) {
        this.history.push(command)
    }

    pop() {
        this.history.pop()
    }
    getHistory() {
        return [...this.history];
    }
}


class Editor {
    text: string

    getSelection() {
        return this.text
    }

    deleteSelection() {
        this.text = ""
    }

    replaceSelection(value: string) {
        this.text = value
    }
}

class Invoker {
    onCopy: CopyCommand
    onPaste: PasteCommand
    onUndo: UndoCommand
}

class Application {
    clipboard: string = ""
    activeEditor: Editor = new Editor()
    history: CommandHistory = new CommandHistory([])
    invoker: Invoker = new Invoker()

    constructor() {
        this.invoker.onCopy = new CopyCommand(this, this.activeEditor)
        this.invoker.onPaste = new PasteCommand(this, this.activeEditor)
        this.invoker.onUndo = new UndoCommand(this, this.activeEditor)
    }

    undo() {
        this.history.pop()
    }
}

const app = new Application()
app.activeEditor.replaceSelection('Teste')
app.invoker.onCopy.execute()
console.log(app.activeEditor.text)
app.invoker.onPaste.execute()
console.log(app.activeEditor.text)
app.invoker.onPaste.undo()
console.log(app.activeEditor.text)
